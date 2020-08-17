export interface CheckoutRoomVariants_roomVariants_edges_node_pricing_priceUndiscounted_gross {
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
export interface CheckoutRoomVariants_roomVariants_edges_node_pricing_priceUndiscounted_net {
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
export interface CheckoutRoomVariants_roomVariants_edges_node_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: CheckoutRoomVariants_roomVariants_edges_node_pricing_priceUndiscounted_gross;
    /**
     * Amount of money without taxes.
     */
    net: CheckoutRoomVariants_roomVariants_edges_node_pricing_priceUndiscounted_net;
}
export interface CheckoutRoomVariants_roomVariants_edges_node_pricing_price_gross {
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
export interface CheckoutRoomVariants_roomVariants_edges_node_pricing_price_net {
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
export interface CheckoutRoomVariants_roomVariants_edges_node_pricing_price {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: CheckoutRoomVariants_roomVariants_edges_node_pricing_price_gross;
    /**
     * Amount of money without taxes.
     */
    net: CheckoutRoomVariants_roomVariants_edges_node_pricing_price_net;
}
export interface CheckoutRoomVariants_roomVariants_edges_node_pricing {
    __typename: "VariantPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The price without any discount.
     */
    priceUndiscounted: CheckoutRoomVariants_roomVariants_edges_node_pricing_priceUndiscounted | null;
    /**
     * The price, with any discount subtracted.
     */
    price: CheckoutRoomVariants_roomVariants_edges_node_pricing_price | null;
}
export interface CheckoutRoomVariants_roomVariants_edges_node_attributes_attribute {
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
export interface CheckoutRoomVariants_roomVariants_edges_node_attributes_values {
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
export interface CheckoutRoomVariants_roomVariants_edges_node_attributes {
    __typename: "SelectedAttribute";
    /**
     * Name of an attribute displayed in the interface.
     */
    attribute: CheckoutRoomVariants_roomVariants_edges_node_attributes_attribute;
    /**
     * Values of an attribute.
     */
    values: (CheckoutRoomVariants_roomVariants_edges_node_attributes_values | null)[];
}
export interface CheckoutRoomVariants_roomVariants_edges_node_room_thumbnail {
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
export interface CheckoutRoomVariants_roomVariants_edges_node_room_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface CheckoutRoomVariants_roomVariants_edges_node_room_roomType {
    __typename: "RoomType";
    isShippingRequired: boolean;
}
export interface CheckoutRoomVariants_roomVariants_edges_node_room {
    __typename: "Room";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    /**
     * The main thumbnail for a room.
     */
    thumbnail: CheckoutRoomVariants_roomVariants_edges_node_room_thumbnail | null;
    /**
     * The main thumbnail for a room.
     */
    thumbnail2x: CheckoutRoomVariants_roomVariants_edges_node_room_thumbnail2x | null;
    roomType: CheckoutRoomVariants_roomVariants_edges_node_room_roomType;
}
export interface CheckoutRoomVariants_roomVariants_edges_node {
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
    pricing: CheckoutRoomVariants_roomVariants_edges_node_pricing | null;
    /**
     * List of attributes assigned to this variant.
     */
    attributes: CheckoutRoomVariants_roomVariants_edges_node_attributes[];
    room: CheckoutRoomVariants_roomVariants_edges_node_room;
}
export interface CheckoutRoomVariants_roomVariants_edges {
    __typename: "RoomVariantCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: CheckoutRoomVariants_roomVariants_edges_node;
}
export interface CheckoutRoomVariants_roomVariants {
    __typename: "RoomVariantCountableConnection";
    edges: CheckoutRoomVariants_roomVariants_edges[];
}
export interface CheckoutRoomVariants {
    /**
     * List of room variants.
     */
    roomVariants: CheckoutRoomVariants_roomVariants | null;
}
export interface CheckoutRoomVariantsVariables {
    ids?: (string | null)[] | null;
}
