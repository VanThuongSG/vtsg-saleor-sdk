import APIProxy from "../api/APIProxy";
import { RequireAtLeastOne } from "../tsHelpers";
import { ApolloErrorWithUserInput, Options, Variables, WatchQueryReturnData } from "./types";
declare type OmittedOptions<T extends keyof APIProxy> = Omit<Options<T>, "onUpdate" | "onComplete" | "onError"> & {
    skip?: boolean;
};
export declare const queryWithVariablesFactory: <T extends "signIn" | "getAttributes" | "getRoomDetails" | "getRoomList" | "getCategoryDetails" | "getOrdersByUser" | "getOrderDetails" | "getVariantsRooms" | "getShopDetails" | "setUserDefaultAddress" | "setDeleteUserAddress" | "setCreateUserAddress" | "setUpdateuserAddress" | "setAccountUpdate" | "client" | "setPassword" | "setPasswordChange" | "attachAuthListener" | "isLoggedIn" | "watchQuery" | "fireQuery">(query: T) => (variables: Variables<T>, options?: OmittedOptions<T> | undefined) => {
    loadMore: (loadMoreVariables: RequireAtLeastOne<Variables<T>, keyof Variables<T>>, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: Variables<T> | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: WatchQueryReturnData<T> | null;
    loading: boolean;
    error: ApolloErrorWithUserInput | null;
};
export declare const queryFactory: <T extends "signIn" | "getAttributes" | "getRoomDetails" | "getRoomList" | "getCategoryDetails" | "getOrdersByUser" | "getOrderDetails" | "getVariantsRooms" | "getShopDetails" | "setUserDefaultAddress" | "setDeleteUserAddress" | "setCreateUserAddress" | "setUpdateuserAddress" | "setAccountUpdate" | "client" | "setPassword" | "setPasswordChange" | "attachAuthListener" | "isLoggedIn" | "watchQuery" | "fireQuery">(query: T) => (options?: OmittedOptions<T> | undefined) => {
    loadMore: (loadMoreVariables: RequireAtLeastOne<Variables<T>, keyof Variables<T>>, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: Variables<T> | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: WatchQueryReturnData<T> | null;
    loading: boolean;
    error: ApolloErrorWithUserInput | null;
};
export {};
