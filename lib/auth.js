"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLink = exports.invalidTokenLinkWithTokenHandler = exports.setAuthToken = exports.getAuthToken = exports.authEvent = void 0;
const apollo_link_context_1 = require("apollo-link-context");
const apollo_link_error_1 = require("apollo-link-error");
exports.authEvent = new Event("auth");
function getAuthToken() {
    try {
        return localStorage.getItem("token");
    }
    catch (_a) {
        return null;
    }
}
exports.getAuthToken = getAuthToken;
function setAuthToken(token) {
    localStorage.setItem("token", token);
    dispatchEvent(exports.authEvent);
}
exports.setAuthToken = setAuthToken;
// possibly remove callback here and use event emitter
exports.invalidTokenLinkWithTokenHandler = (tokenExpirationCallback) => {
    const link = apollo_link_error_1.onError((error) => {
        var _a;
        const isTokenExpired = (_a = error.graphQLErrors) === null || _a === void 0 ? void 0 : _a.some(gqlError => { var _a, _b; return ((_b = (_a = gqlError.extensions) === null || _a === void 0 ? void 0 : _a.exception) === null || _b === void 0 ? void 0 : _b.code) === "JSONWebTokenExpired"; });
        if (isTokenExpired ||
            (error.networkError && error.networkError.statusCode === 401)) {
            tokenExpirationCallback();
        }
    });
    return link;
};
exports.authLink = apollo_link_context_1.setContext((_, context) => {
    const authToken = getAuthToken();
    if (authToken) {
        return Object.assign(Object.assign({}, context), { headers: Object.assign(Object.assign({}, context.headers), { Authorization: authToken ? `JWT ${authToken}` : null }) });
    }
    return context;
});
//# sourceMappingURL=auth.js.map