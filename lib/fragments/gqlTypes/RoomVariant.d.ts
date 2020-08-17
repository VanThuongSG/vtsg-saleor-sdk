export interface RoomVariant_pricing_priceUndiscounted_gross {
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
export interface RoomVariant_pricing_priceUndiscounted_net {
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
export interface RoomVariant_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomVariant_pricing_priceUndiscounted_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomVariant_pricing_priceUndiscounted_net;
}
export interface RoomVariant_pricing_price_gross {
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
export interface RoomVariant_pricing_price_net {
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
export interface RoomVariant_pricing_price {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomVariant_pricing_price_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomVariant_pricing_price_net;
}
export interface RoomVariant_pricing {
    __typename: "VariantPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The price without any discount.
     */
    priceUndiscounted: RoomVariant_pricing_priceUndiscounted | null;
    /**
     * The price, with any discount subtracted.
     */
    price: RoomVariant_pricing_price | null;
}
export interface RoomVariant_attributes_attribute {
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
export interface RoomVariant_attributes_values {
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
export interface RoomVariant_attributes {
    __typename: "SelectedAttribute";
    /**
     * Name of an attribute displayed in the interface.
     */
    attribute: RoomVariant_attributes_attribute;
    /**
     * Values of an attribute.
     */
    values: (RoomVariant_attributes_values | null)[];
}
export interface RoomVariant_room_thumbnail {
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
export interface RoomVariant_room_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface RoomVariant_room_roomType {
    __typename: "RoomType";
    isShippingRequired: boolean;
}
export interface RoomVariant_room {
    __typename: "Room";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    /**
     * The main thumbnail for a room.
     */
    thumbnail: RoomVariant_room_thumbnail | null;
    /**
     * The main thumbnail for a room.
     */
    thumbnail2x: RoomVariant_room_thumbnail2x | null;
    roomType: RoomVariant_room_roomType;
}
export interface RoomVariant {
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
    pricing: RoomVariant_pricing | null;
    /**
     * List of attributes assigned to this variant.
     */
    attributes: RoomVariant_attributes[];
    room: RoomVariant_room;
}
