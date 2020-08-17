import { ApolloClient } from "apollo-client";
import { SaleorAPI } from "./api";
import { ConfigInput } from "./types";
export declare class SaleorManager {
    private apiProxy;
    private api;
    private apiChangeListener;
    constructor(client: ApolloClient<any>, config: ConfigInput);
    /**
     * Use this method to obtain current API and listen to its update on occured changes within it.
     * @param apiChangeListener Function called to get an API and called on every API update.
     */
    connect(apiChangeListener: (api: SaleorAPI) => any): void;
    private onSaleorAPIChange;
}
export * from "./auth";
export * from "./cache";
export * from "./links";
export * from "./client";
export * from "./gqlTypes/globalTypes";
export * from "./react";
