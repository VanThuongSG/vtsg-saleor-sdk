"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomVariantFragment = exports.selectedAttributeFragment = exports.basicRoomFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const checkout_1 = require("./checkout");
exports.basicRoomFragment = graphql_tag_1.default `
  fragment BasicRoomFields on Room {
    id
    name
    thumbnail {
      url
      alt
    }
    thumbnail2x: thumbnail(size: 510) {
      url
    }
  }
`;
exports.selectedAttributeFragment = graphql_tag_1.default `
  fragment SelectedAttributeFields on SelectedAttribute {
    attribute {
      id
      name
      slug
    }
    values {
      id
      name
    }
  }
`;
exports.roomVariantFragment = graphql_tag_1.default `
  ${checkout_1.checkoutPriceFragment}
  fragment RoomVariantFields on RoomVariant {
    id
    sku
    name
    quantityAvailable(countryCode: $countryCode)
    isAvailable
    images {
      id
      url
      alt
    }
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...Price
      }
    }
    attributes {
      attribute {
        id
        name
        slug
      }
      values {
        id
        name
        value: name
      }
    }
  }
`;
//# sourceMappingURL=rooms.js.map