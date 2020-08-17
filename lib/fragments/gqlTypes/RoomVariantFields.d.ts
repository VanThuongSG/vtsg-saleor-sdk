export interface RoomVariantFields_images {
    __typename: "RoomImage";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * The URL of the image.
     */
    url: string;
    alt: string;
}
export interface RoomVariantFields_pricing_priceUndiscounted_gross {
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
export interface RoomVariantFields_pricing_priceUndiscounted_net {
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
export interface RoomVariantFields_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomVariantFields_pricing_priceUndiscounted_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomVariantFields_pricing_priceUndiscounted_net;
}
export interface RoomVariantFields_pricing_price_gross {
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
export interface RoomVariantFields_pricing_price_net {
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
export interface RoomVariantFields_pricing_price {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomVariantFields_pricing_price_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomVariantFields_pricing_price_net;
}
export interface RoomVariantFields_pricing {
    __typename: "VariantPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The price without any discount.
     */
    priceUndiscounted: RoomVariantFields_pricing_priceUndiscounted | null;
    /**
     * The price, with any discount subtracted.
     */
    price: RoomVariantFields_pricing_price | null;
}
export interface RoomVariantFields_attributes_attribute {
    __typename: "Attribute";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Name of an attribute displayed in the interface.
     */
    name: string | null;
    /**
     * Internal representation of an attribute name.
     */
    slug: string | null;
}
export interface RoomVariantFields_attributes_values {
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
export interface RoomVariantFields_attributes {
    __typename: "SelectedAttribute";
    /**
     * Name of an attribute displayed in the interface.
     */
    attribute: RoomVariantFields_attributes_attribute;
    /**
     * Values of an attribute.
     */
    values: (RoomVariantFields_attributes_values | null)[];
}
export interface RoomVariantFields {
    __typename: "RoomVariant";
    /**
     * The ID of the object.
     */
    id: string;
    sku: string;
    name: string;
    /**
     * Quantity of a room available for sale in one checkout.
     */
    quantityAvailable: number;
    /**
     * Whether the variant is in stock and visible or not.
     */
    isAvailable: boolean | null;
    /**
     * List of images for the room variant.
     */
    images: (RoomVariantFields_images | null)[] | null;
    /**
     * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: RoomVariantFields_pricing | null;
    /**
     * List of attributes assigned to this variant.
     */
    attributes: RoomVariantFields_attributes[];
}
