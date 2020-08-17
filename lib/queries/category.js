"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryQuery = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.categoryQuery = graphql_tag_1.default `
  query CategoryDetails($id: ID!) {
    category(id: $id) {
      seoDescription
      seoTitle
      id
      name
      backgroundImage {
        url
      }
      ancestors(last: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=category.js.map