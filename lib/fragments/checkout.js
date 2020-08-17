"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutFragment = exports.checkoutLineFragment = exports.checkoutShippingMethodFragment = exports.checkoutRoomVariantFragment = exports.checkoutAddressFragment = exports.checkoutPriceFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.checkoutPriceFragment = graphql_tag_1.default `
  fragment Price on TaxedMoney {
    gross {
      amount
      currency
    }
    net {
      amount
      currency
    }
  }
`;
exports.checkoutAddressFragment = graphql_tag_1.default `
  fragment Address on Address {
    id
    firstName
    lastName
    companyName
    streetAddress1
    streetAddress2
    city
    postalCode
    country {
      code
      country
    }
    countryArea
    phone
    isDefaultBillingAddress
    isDefaultShippingAddress
  }
`;
exports.checkoutRoomVariantFragment = graphql_tag_1.default `
  ${exports.checkoutPriceFragment}
  fragment RoomVariant on RoomVariant {
    id
    name
    sku
    quantityAvailable
    isAvailable
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
      }
      values {
        id
        name
        value: name
      }
    }
    room {
      id
      name
      thumbnail {
        url
        alt
      }
      thumbnail2x: thumbnail(size: 510) {
        url
      }
      roomType {
        id
        isShippingRequired
      }
    }
  }
`;
exports.checkoutShippingMethodFragment = graphql_tag_1.default `
  fragment ShippingMethod on ShippingMethod {
    id
    name
    price {
      currency
      amount
    }
  }
`;
exports.checkoutLineFragment = graphql_tag_1.default `
  ${exports.checkoutPriceFragment}
  ${exports.checkoutRoomVariantFragment}
  fragment CheckoutLine on CheckoutLine {
    id
    quantity
    totalPrice {
      ...Price
    }
    variant {
      ...RoomVariant
    }
  }
`;
exports.checkoutFragment = graphql_tag_1.default `
  ${exports.checkoutLineFragment}
  ${exports.checkoutAddressFragment}
  ${exports.checkoutPriceFragment}
  ${exports.checkoutShippingMethodFragment}
  fragment Checkout on Checkout {
    token
    id
    totalPrice {
      ...Price
    }
    subtotalPrice {
      ...Price
    }
    billingAddress {
      ...Address
    }
    shippingAddress {
      ...Address
    }
    email
    availableShippingMethods {
      ...ShippingMethod
    }
    shippingMethod {
      ...ShippingMethod
    }
    shippingPrice {
      ...Price
    }
    lines {
      ...CheckoutLine
    }
    isShippingRequired
    discount {
      currency
      amount
    }
    discountName
    translatedDiscountName
    voucherCode
  }
`;
//# sourceMappingURL=checkout.js.map