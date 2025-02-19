import { PaymentChargeStatusEnum, OrderStatus } from "./../../gqlTypes/globalTypes";
export interface OrderDetail_shippingAddress_country {
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
export interface OrderDetail_shippingAddress {
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
    country: OrderDetail_shippingAddress_country;
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
export interface OrderDetail_lines_variant_pricing_priceUndiscounted_gross {
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
export interface OrderDetail_lines_variant_pricing_priceUndiscounted_net {
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
export interface OrderDetail_lines_variant_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: OrderDetail_lines_variant_pricing_priceUndiscounted_gross;
    /**
     * Amount of money without taxes.
     */
    net: OrderDetail_lines_variant_pricing_priceUndiscounted_net;
}
export interface OrderDetail_lines_variant_pricing_price_gross {
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
export interface OrderDetail_lines_variant_pricing_price_net {
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
export interface OrderDetail_lines_variant_pricing_price {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: OrderDetail_lines_variant_pricing_price_gross;
    /**
     * Amount of money without taxes.
     */
    net: OrderDetail_lines_variant_pricing_price_net;
}
export interface OrderDetail_lines_variant_pricing {
    __typename: "VariantPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The price without any discount.
     */
    priceUndiscounted: OrderDetail_lines_variant_pricing_priceUndiscounted | null;
    /**
     * The price, with any discount subtracted.
     */
    price: OrderDetail_lines_variant_pricing_price | null;
}
export interface OrderDetail_lines_variant_attributes_attribute {
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
export interface OrderDetail_lines_variant_attributes_values {
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
export interface OrderDetail_lines_variant_attributes {
    __typename: "SelectedAttribute";
    /**
     * Name of an attribute displayed in the interface.
     */
    attribute: OrderDetail_lines_variant_attributes_attribute;
    /**
     * Values of an attribute.
     */
    values: (OrderDetail_lines_variant_attributes_values | null)[];
}
export interface OrderDetail_lines_variant_room_thumbnail {
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
export interface OrderDetail_lines_variant_room_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface OrderDetail_lines_variant_room_roomType {
    __typename: "RoomType";
    isShippingRequired: boolean;
}
export interface OrderDetail_lines_variant_room {
    __typename: "Room";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    /**
     * The main thumbnail for a room.
     */
    thumbnail: OrderDetail_lines_variant_room_thumbnail | null;
    /**
     * The main thumbnail for a room.
     */
    thumbnail2x: OrderDetail_lines_variant_room_thumbnail2x | null;
    roomType: OrderDetail_lines_variant_room_roomType;
}
export interface OrderDetail_lines_variant {
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
    pricing: OrderDetail_lines_variant_pricing | null;
    /**
     * List of attributes assigned to this variant.
     */
    attributes: OrderDetail_lines_variant_attributes[];
    room: OrderDetail_lines_variant_room;
}
export interface OrderDetail_lines_unitPrice_gross {
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
export interface OrderDetail_lines_unitPrice_net {
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
export interface OrderDetail_lines_unitPrice {
    __typename: "TaxedMoney";
    /**
     * Currency code.
     */
    currency: string;
    /**
     * Amount of money including taxes.
     */
    gross: OrderDetail_lines_unitPrice_gross;
    /**
     * Amount of money without taxes.
     */
    net: OrderDetail_lines_unitPrice_net;
}
export interface OrderDetail_lines {
    __typename: "OrderLine";
    roomName: string;
    quantity: number;
    /**
     * A purchased room variant. Note: this field may be null if the variant has been removed from stock at all.
     */
    variant: OrderDetail_lines_variant | null;
    /**
     * Price of the single item in the order line.
     */
    unitPrice: OrderDetail_lines_unitPrice | null;
}
export interface OrderDetail_subtotal_gross {
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
export interface OrderDetail_subtotal_net {
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
export interface OrderDetail_subtotal {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: OrderDetail_subtotal_gross;
    /**
     * Amount of money without taxes.
     */
    net: OrderDetail_subtotal_net;
}
export interface OrderDetail_total_gross {
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
export interface OrderDetail_total_net {
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
export interface OrderDetail_total {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: OrderDetail_total_gross;
    /**
     * Amount of money without taxes.
     */
    net: OrderDetail_total_net;
}
export interface OrderDetail_shippingPrice_gross {
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
export interface OrderDetail_shippingPrice_net {
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
export interface OrderDetail_shippingPrice {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: OrderDetail_shippingPrice_gross;
    /**
     * Amount of money without taxes.
     */
    net: OrderDetail_shippingPrice_net;
}
export interface OrderDetail {
    __typename: "Order";
    /**
     * Email address of the customer.
     */
    userEmail: string | null;
    /**
     * Internal payment status.
     */
    paymentStatus: PaymentChargeStatusEnum | null;
    /**
     * User-friendly payment status.
     */
    paymentStatusDisplay: string | null;
    status: OrderStatus;
    /**
     * User-friendly order status.
     */
    statusDisplay: string | null;
    /**
     * The ID of the object.
     */
    id: string;
    token: string;
    /**
     * User-friendly number of an order.
     */
    number: string | null;
    shippingAddress: OrderDetail_shippingAddress | null;
    /**
     * List of order lines.
     */
    lines: (OrderDetail_lines | null)[];
    /**
     * The sum of line prices not including shipping.
     */
    subtotal: OrderDetail_subtotal | null;
    /**
     * Total amount of the order.
     */
    total: OrderDetail_total | null;
    /**
     * Total price of shipping.
     */
    shippingPrice: OrderDetail_shippingPrice | null;
}
