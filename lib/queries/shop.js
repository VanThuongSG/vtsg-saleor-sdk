"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopPaymentGateways = exports.getShop = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const shop_1 = require("../fragments/shop");
exports.getShop = graphql_tag_1.default `
  query GetShop {
    shop {
      displayGrossPrices
      defaultCountry {
        code
        country
      }
      countries {
        country
        code
      }
      geolocalization {
        country {
          code
          country
        }
      }
    }
  }
`;
exports.getShopPaymentGateways = graphql_tag_1.default `
  ${shop_1.paymentGatewayFragment}
  query GetShopPaymentGateways {
    shop {
      availablePaymentGateways {
        ...PaymentGateway
      }
    }
  }
`;
//# sourceMappingURL=shop.js.map