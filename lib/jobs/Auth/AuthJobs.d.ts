import { DataErrorCheckoutTypes } from "../../api/Checkout/types";
import { ApolloClientManager } from "../../data/ApolloClientManager";
import { LocalStorageHandler } from "../../helpers/LocalStorageHandler";
import { DataErrorAuthTypes } from "../../api/Auth/types";
import { JobRunResponse } from "../types";
export declare type PromiseAuthJobRunResponse = Promise<JobRunResponse<DataErrorAuthTypes | DataErrorCheckoutTypes>>;
export declare class AuthJobs {
    private apolloClientManager;
    private localStorageHandler;
    constructor(localStorageHandler: LocalStorageHandler, apolloClientManager: ApolloClientManager);
    provideUser: () => PromiseAuthJobRunResponse;
    signIn: ({ email, password, }: {
        email: string;
        password: string;
    }) => PromiseAuthJobRunResponse;
    signOut: () => PromiseAuthJobRunResponse;
}
