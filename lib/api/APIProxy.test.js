"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const apollo_link_batch_http_1 = require("apollo-link-batch-http");
const apollo_client_1 = __importDefault(require("apollo-client"));
const setup_polly_jest_1 = require("setup-polly-jest");
const core_1 = require("@pollyjs/core");
const node_fetch_1 = __importDefault(require("node-fetch"));
const adapter_node_http_1 = __importDefault(require("@pollyjs/adapter-node-http"));
const persister_fs_1 = __importDefault(require("@pollyjs/persister-fs"));
const path_1 = __importDefault(require("path"));
const APIProxy_1 = __importDefault(require("./APIProxy"));
core_1.Polly.register(adapter_node_http_1.default);
core_1.Polly.register(persister_fs_1.default);
setup_polly_jest_1.setupPolly({
    adapterOptions: {
        fetch: {
            context: global,
        },
    },
    adapters: ["node-http"],
    persister: "fs",
    persisterOptions: {
        fs: {
            recordingsDir: path_1.default.resolve(__dirname, "../recordings"),
        },
    },
    recordIfMissing: true,
});
const cache = new apollo_cache_inmemory_1.InMemoryCache();
const link = new apollo_link_batch_http_1.BatchHttpLink({
    // @ts-ignore
    fetch: node_fetch_1.default,
    uri: "http://localhost:8000/graphql/",
});
const apolloClient = new apollo_client_1.default({
    cache,
    link,
});
const proxy = new APIProxy_1.default(apolloClient);
test("Can log in", () => {
    return proxy
        .signIn({
        email: "admin@example.com",
        password: "admin",
    })
        .then(result => {
        var _a, _b, _c;
        expect((_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.token) === null || _b === void 0 ? void 0 : _b.length).toBeGreaterThan(1);
        expect((_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.errors.length).toBe(0);
    });
});
test("Returns error if credentials are invalid", () => {
    return proxy
        .signIn({
        email: "admin@example.com",
        password: "admin1",
    })
        .catch(error => {
        expect(error === null || error === void 0 ? void 0 : error.extraInfo.userInputErrors.length).toBe(1);
    });
});
test("Does not cache mutations", done => {
    proxy
        .signIn({
        email: "admin@example.com",
        password: "admin",
    })
        .then(() => proxy.setPassword({
        email: "admin@example.com",
        password: "admin12345678",
        token: "5hr-73a06b70fd6ad8ab3913",
    }))
        .catch(() => proxy.setPasswordChange({
        newPassword: "admin12345678",
        oldPassword: "admin12345678",
    }))
        .catch(() => {
        const extractedCache = cache.extract();
        expect(extractedCache.ROOT_MUTATION).toBeUndefined();
        done();
    });
});
//# sourceMappingURL=APIProxy.test.js.map