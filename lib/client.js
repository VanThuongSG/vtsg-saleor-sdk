"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaleorClient = void 0;
const apollo_client_1 = require("apollo-client");
const apollo_link_1 = require("apollo-link");
/**
 * Creates Apollo client.
 * @param cache Cache used by created Apollo client.
 * @param links Links used by created Apollo client.
 */
function createSaleorClient(cache, links) {
    return new apollo_client_1.ApolloClient({
        cache,
        link: apollo_link_1.ApolloLink.from(links),
    });
}
exports.createSaleorClient = createSaleorClient;
//# sourceMappingURL=client.js.map