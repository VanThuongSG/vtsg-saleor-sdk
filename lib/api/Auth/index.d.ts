import { User } from "../../fragments/gqlTypes/User";
import { ErrorListener } from "../../helpers";
import { JobsManager } from "../../jobs";
import { SaleorState } from "../../state";
import { PromiseRunResponse } from "../types";
import { DataErrorAuthTypes } from "./types";
import { Config } from "../../types";
export declare const BROWSER_NO_CREDENTIAL_API_MESSAGE = "Saleor SDK is unable to use browser Credential Management API.";
export declare class AuthAPI extends ErrorListener {
    /**
     * Indicates if data is initialized, initially retrieved from cache or initially fetched.
     */
    loaded: boolean;
    /**
     * User object with currently signed in user data.
     */
    user?: User | null;
    /**
     * Indicates if user is signed in.
     */
    authenticated?: boolean;
    /**
     * Token used for user authentication.
     */
    token?: string;
    private saleorState;
    private jobsManager;
    private config;
    constructor(saleorState: SaleorState, jobsManager: JobsManager, config: Config);
    /**
     * Tries to authenticate user with given email and password.
     * @param email Email used for authentication.
     * @param password Password used for authentication.
     * @param autoSignIn Indicates if SDK should try to sign in user with given credentials in future without explicitly calling this method. True by default.
     */
    signIn: (email: string, password: string, autoSignIn?: boolean) => PromiseRunResponse<DataErrorAuthTypes>;
    /**
     * Sign out user by clearing cache, local storage and authentication token.
     */
    signOut: () => PromiseRunResponse<DataErrorAuthTypes>;
    private autoSignIn;
}
