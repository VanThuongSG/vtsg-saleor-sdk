import { AccountErrorCode } from "./../../gqlTypes/globalTypes";
export interface TokenAuth_tokenCreate_errors {
    __typename: "AccountError";
    /**
     * The error code.
     */
    code: AccountErrorCode;
    /**
     * Name of a field that caused the error. A value of `null` indicates that the
     * error isn't associated with a particular field.
     */
    field: string | null;
    /**
     * The error message.
     */
    message: string | null;
}
export interface TokenAuth_tokenCreate_user {
    __typename: "User";
    /**
     * The ID of the object.
     */
    id: string;
}
export interface TokenAuth_tokenCreate {
    __typename: "CreateToken";
    /**
     * JWT token, required to authenticate.
     */
    token: string | null;
    errors: TokenAuth_tokenCreate_errors[];
    /**
     * A user instance.
     */
    user: TokenAuth_tokenCreate_user | null;
}
export interface TokenAuth {
    /**
     * Create JWT token.
     */
    tokenCreate: TokenAuth_tokenCreate | null;
}
export interface TokenAuthVariables {
    email: string;
    password: string;
}
