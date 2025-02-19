import { Checkout_availableShippingMethods, Checkout_lines_variant_attributes, Checkout_lines_variant_pricing, Checkout_lines_variant_room } from "../../fragments/gqlTypes/Checkout";
import { IQueuedJobs } from "../../jobs/QueuedJobs";
export declare enum LocalStorageItems {
    JOB_QUEUE_CHECKOUT = "job_queueCheckout",
    TOKEN = "token",
    CHECKOUT = "data_checkout",
    PAYMENT = "data_payment"
}
export declare enum LocalStorageEvents {
    CLEAR = "clear"
}
export interface ICheckoutModelLineTotalPrice {
    gross: ICheckoutModelPriceValue;
    net: ICheckoutModelPriceValue;
}
export interface ICheckoutModelLineVariant {
    quantityAvailable?: number;
    id: string;
    name?: string;
    sku?: string;
    pricing?: Checkout_lines_variant_pricing | null;
    room?: Checkout_lines_variant_room;
    isAvailable?: boolean | null;
    attributes?: Checkout_lines_variant_attributes[];
}
export interface ICheckoutModelLine {
    quantity: number;
    id?: string;
    variant: ICheckoutModelLineVariant;
    totalPrice?: ICheckoutModelLineTotalPrice | null;
}
export interface ICheckoutModelPriceValue {
    amount: number;
    currency: string;
}
export interface ICheckoutModelPrice {
    gross: ICheckoutModelPriceValue;
    net: ICheckoutModelPriceValue;
}
export interface ICheckoutAddress {
    id?: string;
    firstName?: string;
    lastName?: string;
    companyName?: string;
    streetAddress1?: string;
    streetAddress2?: string;
    city?: string;
    postalCode?: string;
    countryArea?: string;
    phone?: string | null;
    country?: {
        code?: string;
        country?: string;
    };
}
export interface ICheckoutModelShippingMethod {
    id: string;
    name: string;
    price: ICheckoutModelPriceValue | null;
}
export interface ICheckoutModelPromoCodeDiscount {
    voucherCode?: string | null;
    discount?: ICheckoutModelPriceValue | null;
    discountName?: string | null;
}
export interface IPaymentCreditCard {
    /**
     * Card brand.
     */
    brand?: string;
    /**
     * The host name of the domain.
     */
    firstDigits?: string;
    /**
     * Last 4 digits of the card number.
     */
    lastDigits?: string;
    /**
     * Two-digit number representing the card’s expiration month.
     */
    expMonth?: number;
    /**
     * Four-digit number representing the card’s expiration year.
     */
    expYear?: number;
}
export interface ICheckoutModel {
    id?: string;
    token?: any;
    email?: string;
    shippingAddress?: ICheckoutAddress | null;
    billingAddress?: ICheckoutAddress | null;
    selectedShippingAddressId?: string;
    selectedBillingAddressId?: string;
    billingAsShipping?: boolean;
    promoCodeDiscount?: ICheckoutModelPromoCodeDiscount;
    lines?: ICheckoutModelLine[] | null;
    availableShippingMethods?: Checkout_availableShippingMethods[];
    shippingMethod?: ICheckoutModelShippingMethod | null;
}
export interface IPaymentModel {
    id?: string;
    token?: string;
    gateway?: string;
    creditCard?: IPaymentCreditCard | null;
}
export interface IOrderModel {
    id?: string;
    token?: string;
    number?: string | null;
}
declare type IQueuedJobsState<T> = {
    [P in keyof T]?: Partial<Record<keyof T[P], boolean>>;
};
export declare type IJobsModel = IQueuedJobsState<IQueuedJobs>;
export {};
