import { ApolloError } from "apollo-client";
import { PasswordChange } from "../mutations/gqlTypes/PasswordChange";
import { SetPassword } from "../mutations/gqlTypes/SetPassword";
import { TokenAuth_tokenCreate } from "../mutations/gqlTypes/TokenAuth";
export interface ErrorResponse<T> {
    error?: any;
    type?: T;
}
export interface FunctionQueueResponse {
    pending: boolean;
}
export interface FunctionRunResponse<D, F> {
    data?: any;
    dataError?: ErrorResponse<D>;
    functionError?: ErrorResponse<F>;
    pending: boolean;
}
export declare type PromiseQueuedResponse = Promise<FunctionQueueResponse>;
export declare type PromiseRunResponse<D, F = undefined> = Promise<FunctionRunResponse<D, F>>;
export declare type SignIn = {
    data: TokenAuth_tokenCreate | null;
    error: ApolloError | null;
} | null;
export declare type SetPasswordChange = {
    data: PasswordChange | null;
    error: ApolloError | null;
} | null;
export declare type SetPasswordResult = {
    data: SetPassword | null;
    error: ApolloError | null;
} | null;
