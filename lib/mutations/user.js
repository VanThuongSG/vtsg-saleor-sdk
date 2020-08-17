"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPassword = exports.accountUpdate = exports.changeUserPassword = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const auth_1 = require("../fragments/auth");
const errors_1 = require("../fragments/errors");
exports.changeUserPassword = graphql_tag_1.default `
  ${errors_1.accountErrorFragment}
  mutation PasswordChange($newPassword: String!, $oldPassword: String!) {
    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
      errors: accountErrors {
        ...AccountError
      }
    }
  }
`;
exports.accountUpdate = graphql_tag_1.default `
  ${auth_1.userFragment}
  ${errors_1.accountErrorFragment}
  mutation AccountUpdate($input: AccountInput!) {
    accountUpdate(input: $input) {
      errors: accountErrors {
        ...AccountError
      }
      user {
        ...User
      }
    }
  }
`;
exports.setPassword = graphql_tag_1.default `
  ${auth_1.userFragment}
  ${errors_1.accountErrorFragment}
  mutation SetPassword($token: String!, $email: String!, $password: String!) {
    setPassword(token: $token, email: $email, password: $password) {
      errors: accountErrors {
        ...AccountError
      }
      token
      user {
        ...User
      }
      accountErrors {
        field
        message
        code
      }
    }
  }
`;
//# sourceMappingURL=user.js.map