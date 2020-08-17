import ApolloClient from "apollo-client";
import { PaymentGateway } from "../../fragments/gqlTypes/PaymentGateway";
import { User } from "../../fragments/gqlTypes/User";
import { ICheckoutAddress, ICheckoutModel, ICheckoutModelLine, IOrderModel, IPaymentModel } from "../../helpers/LocalStorageHandler";
export declare class ApolloClientManager {
    private client;
    constructor(client: ApolloClient<any>);
    subscribeToUserChange: (next: (value: User | null) => void, error?: ((error: any) => void) | undefined, complete?: (() => void) | undefined) => void;
    subscribeToPaymentGatewaysChange: (next: (value: PaymentGateway[] | null) => void, error?: ((error: any) => void) | undefined, complete?: (() => void) | undefined) => void;
    getUser: () => Promise<{
        error: readonly import("graphql").GraphQLError[];
        data?: undefined;
    } | {
        data: import("../../queries/gqlTypes/UserDetails").UserDetails_me | null;
        error?: undefined;
    }>;
    signIn: (email: string, password: string) => Promise<{
        error: readonly import("graphql").GraphQLError[];
        data?: undefined;
    } | {
        error: import("../../mutations/gqlTypes/TokenAuth").TokenAuth_tokenCreate_errors[];
        data?: undefined;
    } | {
        data: {
            token: string | null | undefined;
            user: import("../../mutations/gqlTypes/TokenAuth").TokenAuth_tokenCreate_user | null | undefined;
        };
        error?: undefined;
    }>;
    signOut: () => Promise<void>;
    getCheckout: (isUserSignedIn: boolean, checkoutToken: string | null) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    }>;
    getRefreshedCheckoutLines: (checkoutlines: ICheckoutModelLine[] | null) => Promise<{
        error: any;
        data?: undefined;
    } | {
        data: {
            id: string | undefined;
            quantity: number;
            totalPrice: {
                gross: {
                    amount: number;
                    __typename: "Money";
                    currency: string;
                };
                net: {
                    amount: number;
                    __typename: "Money";
                    currency: string;
                };
            } | null;
            variant: import("../../helpers/LocalStorageHandler").ICheckoutModelLineVariant;
        }[];
        error?: undefined;
    }>;
    getPaymentGateways: () => Promise<{
        error: readonly import("graphql").GraphQLError[];
        data?: undefined;
    } | {
        data: import("../../queries/gqlTypes/GetShopPaymentGateways").GetShopPaymentGateways_shop_availablePaymentGateways[];
        error?: undefined;
    }>;
    createCheckout: (email: string, lines: Array<{
        variantId: string;
        quantity: number;
    }>, shippingAddress?: ICheckoutAddress | undefined, billingAddress?: ICheckoutAddress | undefined) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    }>;
    setCartItem: (checkout: ICheckoutModel) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    }>;
    setShippingAddress: (shippingAddress: ICheckoutAddress, email: string, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    setBillingAddress: (billingAddress: ICheckoutAddress, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    setBillingAddressWithEmail: (billingAddress: ICheckoutAddress, email: string, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    setShippingMethod: (shippingMethodId: string, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    addPromoCode: (promoCode: string, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    removePromoCode: (promoCode: string, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    createPayment: (amount: number, checkoutId: string, paymentGateway: string, paymentToken: string, billingAddress: ICheckoutAddress) => Promise<{
        data: IPaymentModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    completeCheckout: (checkoutId: string) => Promise<{
        data: IOrderModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    private constructCheckoutModel;
    private constructPaymentModel;
    private constructOrderModel;
}
