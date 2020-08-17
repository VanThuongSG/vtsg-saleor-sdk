"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentGatewayFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.paymentGatewayFragment = graphql_tag_1.default `
  fragment PaymentGateway on PaymentGateway {
    id
    name
    config {
      field
      value
    }
  }
`;
//# sourceMappingURL=shop.js.map