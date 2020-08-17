"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_client_1 = require("apollo-client");
const auth_1 = require("../auth");
const mutations_1 = require("../mutations");
const queries_1 = require("../queries");
const utils_1 = require("../utils");
const Auth_1 = require("./Auth");
const handleDataErrors = (mapFn, data, apolloErrors) => {
    // INFO: user input errors will be moved to graphql errors
    const userInputErrors = utils_1.getErrorsFromData(data);
    const errors = apolloErrors || userInputErrors
        ? new apollo_client_1.ApolloError({
            extraInfo: userInputErrors,
            graphQLErrors: apolloErrors,
        })
        : null;
    if (errors && utils_1.isDataEmpty(data)) {
        return { errors };
    }
    const result = utils_1.getMappedData(mapFn, data);
    return { data: result };
};
class APIProxy {
    constructor(client) {
        this.getAttributes = this.watchQuery(queries_1.QUERIES.Attributes, data => data.attributes);
        this.getRoomDetails = this.watchQuery(queries_1.QUERIES.RoomDetails, data => data.room);
        this.getRoomList = this.watchQuery(queries_1.QUERIES.RoomList, data => data.rooms);
        this.getCategoryDetails = this.watchQuery(queries_1.QUERIES.CategoryDetails, data => data.category);
        this.getOrdersByUser = this.watchQuery(queries_1.QUERIES.OrdersByUser, data => data.me ? data.me.orders : null);
        this.getOrderDetails = (variables, options) => {
            if (this.isLoggedIn()) {
                return this.watchQuery(queries_1.QUERIES.OrderDetailsByUser, data => data.orderByToken)(variables, options);
            }
            return this.watchQuery(queries_1.QUERIES.OrderDetails, data => data.orderByToken)(variables, options);
        };
        this.getVariantsRooms = this.watchQuery(queries_1.QUERIES.VariantsRooms, data => data.roomVariants);
        this.getShopDetails = this.watchQuery(queries_1.QUERIES.GetShopDetails, data => data);
        this.setUserDefaultAddress = this.fireQuery(mutations_1.MUTATIONS.AddressTypeUpdate, data => data.accountSetDefaultAddress);
        this.setDeleteUserAddress = this.fireQuery(mutations_1.MUTATIONS.DeleteUserAddress, data => data.accountAddressDelete);
        this.setCreateUserAddress = this.fireQuery(mutations_1.MUTATIONS.CreateUserAddress, data => data.accountAddressCreate);
        this.setUpdateuserAddress = this.fireQuery(mutations_1.MUTATIONS.UpdateUserAddress, data => data.accountAddressUpdate);
        this.setAccountUpdate = this.fireQuery(mutations_1.MUTATIONS.AccountUpdate, data => data.accountUpdate);
        this.signIn = (variables, options) => __awaiter(this, void 0, void 0, function* () {
            yield this.client.resetStore();
            let result = null;
            result = yield this.fireQuery(mutations_1.MUTATIONS.TokenAuth, mutationData => mutationData.tokenCreate)(variables, Object.assign(Object.assign({}, options), { fetchPolicy: "no-cache" }));
            const { data } = result;
            if ((data === null || data === void 0 ? void 0 : data.token) && data.errors.length === 0) {
                auth_1.setAuthToken(data.token);
                if (window.PasswordCredential && variables) {
                    navigator.credentials
                        .store(new window.PasswordCredential({
                        id: variables.email,
                        password: variables.password,
                    }))
                        .catch(credentialsError => 
                    // eslint-disable-next-line no-console
                    console.warn(Auth_1.BROWSER_NO_CREDENTIAL_API_MESSAGE, credentialsError));
                }
            }
            return {
                data,
                error: null,
            };
        });
        this.setPassword = (variables, options) => __awaiter(this, void 0, void 0, function* () {
            let result = null;
            result = yield this.fireQuery(mutations_1.MUTATIONS.SetPassword, data => data)(variables, Object.assign(Object.assign({}, options), { fetchPolicy: "no-cache" }));
            const { data } = result;
            return {
                data,
                error: null,
            };
        });
        this.setPasswordChange = (variables, options) => __awaiter(this, void 0, void 0, function* () {
            let result = null;
            result = yield this.fireQuery(mutations_1.MUTATIONS.PasswordChange, data => data)(variables, Object.assign(Object.assign({}, options), { fetchPolicy: "no-cache" }));
            const { data } = result;
            return {
                data,
                error: null,
            };
        });
        this.attachAuthListener = (callback) => {
            const eventHandler = () => {
                callback(this.isLoggedIn());
            };
            window.addEventListener("auth", eventHandler);
            return () => {
                window.removeEventListener("auth", eventHandler);
            };
        };
        this.isLoggedIn = () => {
            return !!auth_1.getAuthToken();
        };
        this.client = client;
    }
    watchQuery(query, mapFn) {
        return (variables, options) => {
            const { onComplete, onError, onUpdate } = options, apolloClientOptions = __rest(options, ["onComplete", "onError", "onUpdate"]);
            const observable = query(this.client, Object.assign(Object.assign({}, apolloClientOptions), { variables }));
            if (options.skip) {
                return {
                    refetch: () => {
                        return new Promise(resolve => {
                            resolve({ data: null });
                        });
                    },
                    unsubscribe: null,
                };
            }
            const subscription = observable.subscribe(result => {
                const { data, errors: apolloErrors } = result;
                const errorHandledData = handleDataErrors(mapFn, data, apolloErrors);
                if (onUpdate) {
                    if (errorHandledData.errors) {
                        if (onError) {
                            onError(errorHandledData.errors);
                        }
                    }
                    else {
                        onUpdate(errorHandledData.data);
                        if (onComplete) {
                            onComplete();
                        }
                    }
                }
            }, error => {
                if (onError) {
                    onError(error);
                }
            });
            return {
                loadMore: (extraVariables, mergeResults = true) => {
                    observable.fetchMore({
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                            if (!fetchMoreResult) {
                                // returning previousResult doesn't trigger observable `next`
                                onUpdate(mapFn(previousResult));
                                return previousResult;
                            }
                            if (mergeResults) {
                                const prevResultRef = mapFn(previousResult);
                                const newResultRef = mapFn(fetchMoreResult);
                                if (!prevResultRef || !newResultRef) {
                                    onUpdate(prevResultRef);
                                    return previousResult;
                                }
                                const mergedEdges = utils_1.mergeEdges(prevResultRef.edges, newResultRef.edges);
                                // use new result for metadata and mutate existing data
                                Object.keys(prevResultRef).forEach(key => {
                                    prevResultRef[key] = newResultRef[key];
                                });
                                prevResultRef.edges = mergedEdges;
                                return previousResult;
                            }
                            return fetchMoreResult;
                        },
                        variables: Object.assign(Object.assign({}, variables), extraVariables),
                    });
                },
                refetch: (newVariables) => {
                    if (newVariables) {
                        observable.setVariables(newVariables);
                        const cachedResult = observable.currentResult();
                        const errorHandledData = handleDataErrors(mapFn, cachedResult.data);
                        if (errorHandledData.data) {
                            onUpdate(errorHandledData.data);
                        }
                    }
                    return APIProxy.firePromise(() => observable.refetch(newVariables), mapFn);
                },
                setOptions: (newOptions) => APIProxy.firePromise(() => observable.setOptions(newOptions), mapFn),
                unsubscribe: subscription.unsubscribe.bind(subscription),
            };
        };
    }
    fireQuery(query, mapFn) {
        return (variables, options) => APIProxy.firePromise(() => query(this.client, Object.assign(Object.assign({}, options), { variables })), mapFn);
    }
    // Promise wrapper to catch errors
    static firePromise(promise, mapFn) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, errors: apolloErrors } = yield promise();
                const errorHandledData = handleDataErrors(mapFn, data, apolloErrors);
                if (errorHandledData.errors) {
                    reject(errorHandledData.errors);
                }
                resolve({ data: errorHandledData.data });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = APIProxy;
//# sourceMappingURL=APIProxy.js.map