"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenVeryficationMutation = exports.tokenAuthMutation = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const errors_1 = require("../fragments/errors");
exports.tokenAuthMutation = graphql_tag_1.default `
  ${errors_1.accountErrorFragment}
  mutation TokenAuth($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      errors: accountErrors {
        ...AccountError
      }
      user {
        id
      }
    }
  }
`;
exports.tokenVeryficationMutation = graphql_tag_1.default `
  mutation VerifyToken($token: String!) {
    tokenVerify(token: $token) {
      payload
      user {
        id
      }
    }
  }
`;
//# sourceMappingURL=auth.js.map