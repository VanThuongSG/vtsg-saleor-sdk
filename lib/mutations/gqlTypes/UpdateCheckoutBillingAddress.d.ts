import { AddressInput, CheckoutErrorCode } from "./../../gqlTypes/globalTypes";
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_errors {
    __typename: "CheckoutError";
    /**
     * The error code.
     */
    code: CheckoutErrorCode;
    /**
     * Name of a field that caused the error. A value of `null` indicates that the
     * error isn't associated with a particular field.
     */
    field: string | null;
    /**
     * The error message.
     */
    message: string | null;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_totalPrice_gross {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_totalPrice_net {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_totalPrice {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_totalPrice_gross;
    /**
     * Amount of money without taxes.
     */
    net: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_totalPrice_net;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_subtotalPrice_gross {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_subtotalPrice_net {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_subtotalPrice {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_subtotalPrice_gross;
    /**
     * Amount of money without taxes.
     */
    net: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_subtotalPrice_net;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_billingAddress_country {
    __typename: "CountryDisplay";
    /**
     * Country code.
     */
    code: string;
    /**
     * Country name.
     */
    country: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_billingAddress {
    __typename: "Address";
    /**
     * The ID of the object.
     */
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    /**
     * Shop's default country.
     */
    country: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_billingAddress_country;
    countryArea: string;
    phone: string | null;
    /**
     * Address is user's default billing address.
     */
    isDefaultBillingAddress: boolean | null;
    /**
     * Address is user's default shipping address.
     */
    isDefaultShippingAddress: boolean | null;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingAddress_country {
    __typename: "CountryDisplay";
    /**
     * Country code.
     */
    code: string;
    /**
     * Country name.
     */
    country: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingAddress {
    __typename: "Address";
    /**
     * The ID of the object.
     */
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    /**
     * Shop's default country.
     */
    country: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingAddress_country;
    countryArea: string;
    phone: string | null;
    /**
     * Address is user's default billing address.
     */
    isDefaultBillingAddress: boolean | null;
    /**
     * Address is user's default shipping address.
     */
    isDefaultShippingAddress: boolean | null;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_availableShippingMethods_price {
    __typename: "Money";
    /**
     * Currency code.
     */
    currency: string;
    /**
     * Amount of money.
     */
    amount: number;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_availableShippingMethods {
    __typename: "ShippingMethod";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    price: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_availableShippingMethods_price | null;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingMethod_price {
    __typename: "Money";
    /**
     * Currency code.
     */
    currency: string;
    /**
     * Amount of money.
     */
    amount: number;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingMethod {
    __typename: "ShippingMethod";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    price: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingMethod_price | null;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingPrice_gross {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingPrice_net {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingPrice {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingPrice_gross;
    /**
     * Amount of money without taxes.
     */
    net: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingPrice_net;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_totalPrice_gross {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_totalPrice_net {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_totalPrice {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_totalPrice_gross;
    /**
     * Amount of money without taxes.
     */
    net: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_totalPrice_net;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted_gross {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted_net {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted_gross;
    /**
     * Amount of money without taxes.
     */
    net: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted_net;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price_gross {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price_net {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price_gross;
    /**
     * Amount of money without taxes.
     */
    net: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price_net;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing {
    __typename: "VariantPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The price without any discount.
     */
    priceUndiscounted: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted | null;
    /**
     * The price, with any discount subtracted.
     */
    price: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price | null;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_attributes_attribute {
    __typename: "Attribute";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Name of an attribute displayed in the interface.
     */
    name: string | null;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_attributes_values {
    __typename: "AttributeValue";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Name of a value displayed in the interface.
     */
    name: string | null;
    /**
     * Name of a value displayed in the interface.
     */
    value: string | null;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_attributes {
    __typename: "SelectedAttribute";
    /**
     * Name of an attribute displayed in the interface.
     */
    attribute: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_attributes_attribute;
    /**
     * Values of an attribute.
     */
    values: (UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_attributes_values | null)[];
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_room_thumbnail {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
    /**
     * Alt text for an image.
     */
    alt: string | null;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_room_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_room_roomType {
    __typename: "RoomType";
    isShippingRequired: boolean;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_room {
    __typename: "Room";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    /**
     * The main thumbnail for a room.
     */
    thumbnail: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_room_thumbnail | null;
    /**
     * The main thumbnail for a room.
     */
    thumbnail2x: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_room_thumbnail2x | null;
    roomType: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_room_roomType;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant {
    __typename: "RoomVariant";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    sku: string;
    /**
     * Quantity of a room available for sale in one checkout.
     */
    quantityAvailable: number;
    /**
     * Whether the variant is in stock and visible or not.
     */
    isAvailable: boolean | null;
    /**
     * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_pricing | null;
    /**
     * List of attributes assigned to this variant.
     */
    attributes: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_attributes[];
    room: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant_room;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines {
    __typename: "CheckoutLine";
    /**
     * The ID of the object.
     */
    id: string;
    quantity: number;
    /**
     * The sum of the checkout line price, taxes and discounts.
     */
    totalPrice: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_totalPrice | null;
    variant: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines_variant;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_discount {
    __typename: "Money";
    /**
     * Currency code.
     */
    currency: string;
    /**
     * Amount of money.
     */
    amount: number;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout {
    __typename: "Checkout";
    /**
     * The checkout's token.
     */
    token: any;
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
     */
    totalPrice: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_totalPrice | null;
    /**
     * The price of the checkout before shipping, with taxes included.
     */
    subtotalPrice: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_subtotalPrice | null;
    billingAddress: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_billingAddress | null;
    shippingAddress: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingAddress | null;
    /**
     * Email of a customer.
     */
    email: string;
    /**
     * Shipping methods that can be used with this order.
     */
    availableShippingMethods: (UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_availableShippingMethods | null)[];
    shippingMethod: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingMethod | null;
    /**
     * The price of the shipping, with all the taxes included.
     */
    shippingPrice: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_shippingPrice | null;
    /**
     * A list of checkout lines, each containing information about an item in the checkout.
     */
    lines: (UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_lines | null)[] | null;
    /**
     * Returns True, if checkout requires shipping.
     */
    isShippingRequired: boolean;
    discount: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout_discount | null;
    discountName: string | null;
    translatedDiscountName: string | null;
    voucherCode: string | null;
}
export interface UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate {
    __typename: "CheckoutBillingAddressUpdate";
    errors: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_errors[];
    /**
     * An updated checkout.
     */
    checkout: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate_checkout | null;
}
export interface UpdateCheckoutBillingAddress {
    /**
     * Update billing address in the existing checkout.
     */
    checkoutBillingAddressUpdate: UpdateCheckoutBillingAddress_checkoutBillingAddressUpdate | null;
}
export interface UpdateCheckoutBillingAddressVariables {
    checkoutId: string;
    billingAddress: AddressInput;
}
