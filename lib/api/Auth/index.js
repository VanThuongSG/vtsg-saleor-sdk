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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAPI = exports.BROWSER_NO_CREDENTIAL_API_MESSAGE = void 0;
const helpers_1 = require("../../helpers");
const types_1 = require("../../state/types");
const types_2 = require("./types");
exports.BROWSER_NO_CREDENTIAL_API_MESSAGE = "Saleor SDK is unable to use browser Credential Management API.";
class AuthAPI extends helpers_1.ErrorListener {
    constructor(saleorState, jobsManager, config) {
        super();
        /**
         * Tries to authenticate user with given email and password.
         * @param email Email used for authentication.
         * @param password Password used for authentication.
         * @param autoSignIn Indicates if SDK should try to sign in user with given credentials in future without explicitly calling this method. True by default.
         */
        this.signIn = (email, password, autoSignIn = true) => __awaiter(this, void 0, void 0, function* () {
            const { data, dataError } = yield this.jobsManager.run("auth", "signIn", {
                email,
                password,
            });
            try {
                if (autoSignIn && !(dataError === null || dataError === void 0 ? void 0 : dataError.error) && window.PasswordCredential) {
                    yield navigator.credentials.store(new window.PasswordCredential({
                        id: email,
                        password,
                    }));
                }
            }
            catch (credentialsError) {
                // eslint-disable-next-line no-console
                console.warn(exports.BROWSER_NO_CREDENTIAL_API_MESSAGE, credentialsError);
            }
            if (dataError) {
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            const { data: userData, dataError: userDataError, } = yield this.jobsManager.run("auth", "provideUser", undefined);
            if (this.config.loadOnStart.checkout) {
                yield this.jobsManager.run("checkout", "provideCheckout", {
                    isUserSignedIn: !!(data === null || data === void 0 ? void 0 : data.user),
                });
            }
            return {
                data: userData,
                dataError: userDataError,
                pending: false,
            };
        });
        /**
         * Sign out user by clearing cache, local storage and authentication token.
         */
        this.signOut = () => __awaiter(this, void 0, void 0, function* () {
            yield this.jobsManager.run("auth", "signOut", undefined);
            try {
                if (navigator.credentials && navigator.credentials.preventSilentAccess) {
                    yield navigator.credentials.preventSilentAccess();
                }
            }
            catch (credentialsError) {
                // eslint-disable-next-line no-console
                console.warn(exports.BROWSER_NO_CREDENTIAL_API_MESSAGE, credentialsError);
            }
            return {
                pending: false,
            };
        });
        this.autoSignIn = () => __awaiter(this, void 0, void 0, function* () {
            let credentials;
            try {
                credentials = yield navigator.credentials.get({
                    password: true,
                });
            }
            catch (credentialsError) {
                // eslint-disable-next-line no-console
                console.warn(exports.BROWSER_NO_CREDENTIAL_API_MESSAGE, credentialsError);
            }
            if (credentials && "password" in credentials && credentials.password) {
                const { dataError } = yield this.signIn(credentials.id, credentials.password, true);
                if (dataError === null || dataError === void 0 ? void 0 : dataError.error) {
                    this.fireError(dataError.error, types_2.DataErrorAuthTypes.SIGN_IN);
                }
            }
        });
        this.saleorState = saleorState;
        this.jobsManager = jobsManager;
        this.config = config;
        this.loaded = false;
        this.saleorState.subscribeToChange(types_1.StateItems.USER, (user) => {
            this.user = user;
            if (this.loaded) {
                this.authenticated = !!this.user;
            }
        });
        this.saleorState.subscribeToChange(types_1.StateItems.SIGN_IN_TOKEN, token => {
            this.token = token;
        });
        this.saleorState.subscribeToChange(types_1.StateItems.LOADED, (loaded) => {
            this.loaded = loaded.user && loaded.signInToken;
            if (this.loaded) {
                this.authenticated = !!this.user;
            }
        });
        if (!this.saleorState.signInToken && window.PasswordCredential) {
            this.autoSignIn();
        }
    }
}
exports.AuthAPI = AuthAPI;
//# sourceMappingURL=index.js.map