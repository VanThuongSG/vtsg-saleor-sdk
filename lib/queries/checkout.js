"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutRoomVariants = exports.userCheckoutDetails = exports.checkoutDetails = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const checkout_1 = require("../fragments/checkout");
exports.checkoutDetails = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  query CheckoutDetails($token: UUID!) {
    checkout(token: $token) {
      ...Checkout
    }
  }
`;
exports.userCheckoutDetails = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  query UserCheckoutDetails {
    me {
      id
      checkout {
        ...Checkout
      }
    }
  }
`;
exports.checkoutRoomVariants = graphql_tag_1.default `
  ${checkout_1.checkoutRoomVariantFragment}
  query CheckoutRoomVariants($ids: [ID]) {
    roomVariants(ids: $ids, first: 100) {
      edges {
        node {
          ...RoomVariant
        }
      }
    }
  }
`;
//# sourceMappingURL=checkout.js.map