import { DataErrorCheckoutTypes, FunctionErrorCheckoutTypes, ICreditCard } from "../../api/Checkout/types";
import { ApolloClientManager } from "../../data/ApolloClientManager";
import { ICheckoutAddress, LocalStorageHandler } from "../../helpers/LocalStorageHandler";
import { JobRunResponse } from "../types";
export declare type PromiseCheckoutJobRunResponse = Promise<JobRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>>;
declare class CheckoutJobs {
    private apolloClientManager;
    private localStorageHandler;
    constructor(localStorageHandler: LocalStorageHandler, apolloClientManager: ApolloClientManager);
    provideCheckout: ({ isUserSignedIn, }: {
        isUserSignedIn: boolean;
    }) => PromiseCheckoutJobRunResponse;
    providePaymentGateways: () => PromiseCheckoutJobRunResponse;
    createCheckout: ({ email, lines, shippingAddress, selectedShippingAddressId, billingAddress, selectedBillingAddressId, }: {
        email: string;
        lines: Array<{
            variantId: string;
            quantity: number;
        }>;
        shippingAddress?: ICheckoutAddress | undefined;
        selectedShippingAddressId?: string | undefined;
        billingAddress?: ICheckoutAddress | undefined;
        selectedBillingAddressId?: string | undefined;
    }) => PromiseCheckoutJobRunResponse;
    setShippingAddress: ({ checkoutId, shippingAddress, email, selectedShippingAddressId, }: {
        checkoutId: string;
        shippingAddress: ICheckoutAddress;
        email: string;
        selectedShippingAddressId?: string | undefined;
    }) => PromiseCheckoutJobRunResponse;
    setBillingAddress: ({ checkoutId, billingAddress, billingAsShipping, selectedBillingAddressId, }: {
        checkoutId: string;
        billingAddress: ICheckoutAddress;
        billingAsShipping?: boolean | undefined;
        selectedBillingAddressId?: string | undefined;
    }) => PromiseCheckoutJobRunResponse;
    setBillingAddressWithEmail: ({ checkoutId, email, billingAddress, selectedBillingAddressId, }: {
        checkoutId: string;
        email: string;
        billingAddress: ICheckoutAddress;
        selectedBillingAddressId?: string | undefined;
    }) => PromiseCheckoutJobRunResponse;
    setShippingMethod: ({ checkoutId, shippingMethodId, }: {
        checkoutId: string;
        shippingMethodId: string;
    }) => PromiseCheckoutJobRunResponse;
    addPromoCode: ({ checkoutId, promoCode, }: {
        checkoutId: string;
        promoCode: string;
    }) => PromiseCheckoutJobRunResponse;
    removePromoCode: ({ checkoutId, promoCode, }: {
        checkoutId: string;
        promoCode: string;
    }) => PromiseCheckoutJobRunResponse;
    createPayment: ({ checkoutId, amount, paymentGateway, paymentToken, billingAddress, creditCard, }: {
        checkoutId: string;
        amount: number;
        paymentGateway: string;
        paymentToken: string;
        billingAddress: ICheckoutAddress;
        creditCard?: import("../../helpers/LocalStorageHandler").IPaymentCreditCard | undefined;
    }) => PromiseCheckoutJobRunResponse;
    completeCheckout: ({ checkoutId, }: {
        checkoutId: string;
    }) => PromiseCheckoutJobRunResponse;
}
export default CheckoutJobs;
