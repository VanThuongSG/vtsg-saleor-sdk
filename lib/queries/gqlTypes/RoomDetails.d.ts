import { CountryCode } from "./../../gqlTypes/globalTypes";
export interface RoomDetails_room_thumbnail {
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
export interface RoomDetails_room_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface RoomDetails_room_pricing_priceRangeUndiscounted_start_gross {
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
export interface RoomDetails_room_pricing_priceRangeUndiscounted_start_net {
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
export interface RoomDetails_room_pricing_priceRangeUndiscounted_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomDetails_room_pricing_priceRangeUndiscounted_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomDetails_room_pricing_priceRangeUndiscounted_start_net;
}
export interface RoomDetails_room_pricing_priceRangeUndiscounted_stop_gross {
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
export interface RoomDetails_room_pricing_priceRangeUndiscounted_stop_net {
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
export interface RoomDetails_room_pricing_priceRangeUndiscounted_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomDetails_room_pricing_priceRangeUndiscounted_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomDetails_room_pricing_priceRangeUndiscounted_stop_net;
}
export interface RoomDetails_room_pricing_priceRangeUndiscounted {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: RoomDetails_room_pricing_priceRangeUndiscounted_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: RoomDetails_room_pricing_priceRangeUndiscounted_stop | null;
}
export interface RoomDetails_room_pricing_priceRange_start_gross {
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
export interface RoomDetails_room_pricing_priceRange_start_net {
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
export interface RoomDetails_room_pricing_priceRange_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomDetails_room_pricing_priceRange_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomDetails_room_pricing_priceRange_start_net;
}
export interface RoomDetails_room_pricing_priceRange_stop_gross {
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
export interface RoomDetails_room_pricing_priceRange_stop_net {
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
export interface RoomDetails_room_pricing_priceRange_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomDetails_room_pricing_priceRange_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomDetails_room_pricing_priceRange_stop_net;
}
export interface RoomDetails_room_pricing_priceRange {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: RoomDetails_room_pricing_priceRange_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: RoomDetails_room_pricing_priceRange_stop | null;
}
export interface RoomDetails_room_pricing {
    __typename: "RoomPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The undiscounted price range of the room variants.
     */
    priceRangeUndiscounted: RoomDetails_room_pricing_priceRangeUndiscounted | null;
    /**
     * The discounted price range of the room variants.
     */
    priceRange: RoomDetails_room_pricing_priceRange | null;
}
export interface RoomDetails_room_category_rooms_edges_node_thumbnail {
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
export interface RoomDetails_room_category_rooms_edges_node_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_start_gross {
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
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_start_net {
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
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_start_net;
}
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_stop_net {
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
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_stop_net;
}
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted_stop | null;
}
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRange_start_gross {
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
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRange_start_net {
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
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRange_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomDetails_room_category_rooms_edges_node_pricing_priceRange_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomDetails_room_category_rooms_edges_node_pricing_priceRange_start_net;
}
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRange_stop_gross {
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
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRange_stop_net {
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
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRange_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomDetails_room_category_rooms_edges_node_pricing_priceRange_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomDetails_room_category_rooms_edges_node_pricing_priceRange_stop_net;
}
export interface RoomDetails_room_category_rooms_edges_node_pricing_priceRange {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: RoomDetails_room_category_rooms_edges_node_pricing_priceRange_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: RoomDetails_room_category_rooms_edges_node_pricing_priceRange_stop | null;
}
export interface RoomDetails_room_category_rooms_edges_node_pricing {
    __typename: "RoomPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The undiscounted price range of the room variants.
     */
    priceRangeUndiscounted: RoomDetails_room_category_rooms_edges_node_pricing_priceRangeUndiscounted | null;
    /**
     * The discounted price range of the room variants.
     */
    priceRange: RoomDetails_room_category_rooms_edges_node_pricing_priceRange | null;
}
export interface RoomDetails_room_category_rooms_edges_node_category {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
}
export interface RoomDetails_room_category_rooms_edges_node {
    __typename: "Room";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    /**
     * The main thumbnail for a room.
     */
    thumbnail: RoomDetails_room_category_rooms_edges_node_thumbnail | null;
    /**
     * The main thumbnail for a room.
     */
    thumbnail2x: RoomDetails_room_category_rooms_edges_node_thumbnail2x | null;
    /**
     * Lists the storefront room's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: RoomDetails_room_category_rooms_edges_node_pricing | null;
    category: RoomDetails_room_category_rooms_edges_node_category | null;
}
export interface RoomDetails_room_category_rooms_edges {
    __typename: "RoomCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: RoomDetails_room_category_rooms_edges_node;
}
export interface RoomDetails_room_category_rooms {
    __typename: "RoomCountableConnection";
    edges: RoomDetails_room_category_rooms_edges[];
}
export interface RoomDetails_room_category {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    /**
     * List of rooms in the category.
     */
    rooms: RoomDetails_room_category_rooms | null;
}
export interface RoomDetails_room_images {
    __typename: "RoomImage";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * The URL of the image.
     */
    url: string;
}
export interface RoomDetails_room_attributes_attribute {
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
export interface RoomDetails_room_attributes_values {
    __typename: "AttributeValue";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Name of a value displayed in the interface.
     */
    name: string | null;
}
export interface RoomDetails_room_attributes {
    __typename: "SelectedAttribute";
    /**
     * Name of an attribute displayed in the interface.
     */
    attribute: RoomDetails_room_attributes_attribute;
    /**
     * Values of an attribute.
     */
    values: (RoomDetails_room_attributes_values | null)[];
}
export interface RoomDetails_room_variants_images {
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
export interface RoomDetails_room_variants_pricing_priceUndiscounted_gross {
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
export interface RoomDetails_room_variants_pricing_priceUndiscounted_net {
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
export interface RoomDetails_room_variants_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomDetails_room_variants_pricing_priceUndiscounted_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomDetails_room_variants_pricing_priceUndiscounted_net;
}
export interface RoomDetails_room_variants_pricing_price_gross {
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
export interface RoomDetails_room_variants_pricing_price_net {
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
export interface RoomDetails_room_variants_pricing_price {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomDetails_room_variants_pricing_price_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomDetails_room_variants_pricing_price_net;
}
export interface RoomDetails_room_variants_pricing {
    __typename: "VariantPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The price without any discount.
     */
    priceUndiscounted: RoomDetails_room_variants_pricing_priceUndiscounted | null;
    /**
     * The price, with any discount subtracted.
     */
    price: RoomDetails_room_variants_pricing_price | null;
}
export interface RoomDetails_room_variants_attributes_attribute {
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
export interface RoomDetails_room_variants_attributes_values {
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
export interface RoomDetails_room_variants_attributes {
    __typename: "SelectedAttribute";
    /**
     * Name of an attribute displayed in the interface.
     */
    attribute: RoomDetails_room_variants_attributes_attribute;
    /**
     * Values of an attribute.
     */
    values: (RoomDetails_room_variants_attributes_values | null)[];
}
export interface RoomDetails_room_variants {
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
    images: (RoomDetails_room_variants_images | null)[] | null;
    /**
     * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: RoomDetails_room_variants_pricing | null;
    /**
     * List of attributes assigned to this variant.
     */
    attributes: RoomDetails_room_variants_attributes[];
}
export interface RoomDetails_room {
    __typename: "Room";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    /**
     * The main thumbnail for a room.
     */
    thumbnail: RoomDetails_room_thumbnail | null;
    /**
     * The main thumbnail for a room.
     */
    thumbnail2x: RoomDetails_room_thumbnail2x | null;
    /**
     * Lists the storefront room's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: RoomDetails_room_pricing | null;
    descriptionJson: any;
    category: RoomDetails_room_category | null;
    /**
     * List of images for the room.
     */
    images: (RoomDetails_room_images | null)[] | null;
    /**
     * List of attributes assigned to this room.
     */
    attributes: RoomDetails_room_attributes[];
    /**
     * List of variants for the room.
     */
    variants: (RoomDetails_room_variants | null)[] | null;
    seoDescription: string | null;
    seoTitle: string | null;
    /**
     * Whether the room is in stock and visible or not.
     */
    isAvailable: boolean | null;
}
export interface RoomDetails {
    /**
     * Look up a room by ID.
     */
    room: RoomDetails_room | null;
}
export interface RoomDetailsVariables {
    id: string;
    countryCode?: CountryCode | null;
}
