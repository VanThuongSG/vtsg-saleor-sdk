"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantsRooms = exports.roomDetails = exports.roomListDetails = exports.roomPricingFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const rooms_1 = require("../fragments/rooms");
exports.roomPricingFragment = graphql_tag_1.default `
  fragment RoomPricingField on Room {
    pricing {
      onSale
      priceRangeUndiscounted {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
      priceRange {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
    }
  }
`;
exports.roomListDetails = graphql_tag_1.default `
  ${rooms_1.basicRoomFragment}
  ${exports.roomPricingFragment}
  query RoomList(
    $id: ID!
    $attributes: [AttributeInput]
    $after: String
    $pageSize: Int
    $sortBy: RoomOrder
    $priceLte: Float
    $priceGte: Float
  ) {
    rooms(
      after: $after
      first: $pageSize
      sortBy: $sortBy
      filter: {
        attributes: $attributes
        categories: [$id]
        minimalPrice: { gte: $priceGte, lte: $priceLte }
      }
    ) {
      totalCount
      edges {
        node {
          ...BasicRoomFields
          ...RoomPricingField
          category {
            id
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
exports.roomDetails = graphql_tag_1.default `
  ${rooms_1.basicRoomFragment}
  ${rooms_1.selectedAttributeFragment}
  ${rooms_1.roomVariantFragment}
  ${exports.roomPricingFragment}
  query RoomDetails($id: ID!, $countryCode: CountryCode) {
    room(id: $id) {
      ...BasicRoomFields
      ...RoomPricingField
      descriptionJson
      category {
        id
        name
        rooms(first: 3) {
          edges {
            node {
              ...BasicRoomFields
              ...RoomPricingField
              category {
                id
                name
              }
            }
          }
        }
      }
      images {
        id
        url
      }
      attributes {
        ...SelectedAttributeFields
      }
      variants {
        ...RoomVariantFields
      }
      seoDescription
      seoTitle
      isAvailable
    }
  }
`;
exports.variantsRooms = graphql_tag_1.default `
  query VariantsRooms($ids: [ID]) {
    roomVariants(ids: $ids, first: 100) {
      edges {
        node {
          id
          room {
            id
            roomType {
              isShippingRequired
            }
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=rooms.js.map