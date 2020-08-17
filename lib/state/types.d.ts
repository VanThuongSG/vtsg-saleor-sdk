import { ICheckoutModelPrice, ICheckoutModelPriceValue } from "../helpers/LocalStorageHandler";
export declare enum StateItems {
    LOADED = 0,
    USER = 1,
    SIGN_IN_TOKEN = 2,
    CHECKOUT = 3,
    SUMMARY_PRICES = 4,
    PROMO_CODE = 5,
    PAYMENT = 6,
    PAYMENT_GATEWAYS = 7
}
export interface ISaleorStateSummeryPrices {
    shippingPrice?: ICheckoutModelPriceValue;
    subtotalPrice?: ICheckoutModelPrice;
    totalPrice?: ICheckoutModelPrice;
    discount?: ICheckoutModelPriceValue;
}
