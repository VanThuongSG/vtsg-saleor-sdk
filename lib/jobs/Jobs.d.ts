import { ApolloClientManager } from "../data/ApolloClientManager";
import { LocalStorageHandler } from "../helpers/LocalStorageHandler";
import { AuthJobs } from "./Auth";
import { CartJobs } from "./Cart";
import { CheckoutJobs } from "./Checkout";
export interface IJobs {
    auth: AuthJobs;
    cart: CartJobs;
    checkout: CheckoutJobs;
}
export declare class Jobs implements IJobs {
    auth: AuthJobs;
    cart: CartJobs;
    checkout: CheckoutJobs;
    constructor(localStorageHandler: LocalStorageHandler, apolloClientManager: ApolloClientManager);
}
