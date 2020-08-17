import { AttributeInput, RoomOrder } from "./../../gqlTypes/globalTypes";
export interface RoomList_rooms_edges_node_thumbnail {
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
export interface RoomList_rooms_edges_node_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_start_gross {
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
export interface RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_start_net {
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
export interface RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_start_net;
}
export interface RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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
export interface RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_stop_net {
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
export interface RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_stop_net;
}
export interface RoomList_rooms_edges_node_pricing_priceRangeUndiscounted {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: RoomList_rooms_edges_node_pricing_priceRangeUndiscounted_stop | null;
}
export interface RoomList_rooms_edges_node_pricing_priceRange_start_gross {
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
export interface RoomList_rooms_edges_node_pricing_priceRange_start_net {
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
export interface RoomList_rooms_edges_node_pricing_priceRange_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomList_rooms_edges_node_pricing_priceRange_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomList_rooms_edges_node_pricing_priceRange_start_net;
}
export interface RoomList_rooms_edges_node_pricing_priceRange_stop_gross {
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
export interface RoomList_rooms_edges_node_pricing_priceRange_stop_net {
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
export interface RoomList_rooms_edges_node_pricing_priceRange_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomList_rooms_edges_node_pricing_priceRange_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomList_rooms_edges_node_pricing_priceRange_stop_net;
}
export interface RoomList_rooms_edges_node_pricing_priceRange {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: RoomList_rooms_edges_node_pricing_priceRange_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: RoomList_rooms_edges_node_pricing_priceRange_stop | null;
}
export interface RoomList_rooms_edges_node_pricing {
    __typename: "RoomPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The undiscounted price range of the room variants.
     */
    priceRangeUndiscounted: RoomList_rooms_edges_node_pricing_priceRangeUndiscounted | null;
    /**
     * The discounted price range of the room variants.
     */
    priceRange: RoomList_rooms_edges_node_pricing_priceRange | null;
}
export interface RoomList_rooms_edges_node_category {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
}
export interface RoomList_rooms_edges_node {
    __typename: "Room";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    /**
     * The main thumbnail for a room.
     */
    thumbnail: RoomList_rooms_edges_node_thumbnail | null;
    /**
     * The main thumbnail for a room.
     */
    thumbnail2x: RoomList_rooms_edges_node_thumbnail2x | null;
    /**
     * Lists the storefront room's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: RoomList_rooms_edges_node_pricing | null;
    category: RoomList_rooms_edges_node_category | null;
}
export interface RoomList_rooms_edges {
    __typename: "RoomCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: RoomList_rooms_edges_node;
}
export interface RoomList_rooms_pageInfo {
    __typename: "PageInfo";
    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor: string | null;
    /**
     * When paginating forwards, are there more items?
     */
    hasNextPage: boolean;
    /**
     * When paginating backwards, are there more items?
     */
    hasPreviousPage: boolean;
    /**
     * When paginating backwards, the cursor to continue.
     */
    startCursor: string | null;
}
export interface RoomList_rooms {
    __typename: "RoomCountableConnection";
    /**
     * A total count of items in the collection.
     */
    totalCount: number | null;
    edges: RoomList_rooms_edges[];
    /**
     * Pagination data for this connection.
     */
    pageInfo: RoomList_rooms_pageInfo;
}
export interface RoomList {
    /**
     * List of the shop's rooms.
     */
    rooms: RoomList_rooms | null;
}
export interface RoomListVariables {
    id: string;
    attributes?: (AttributeInput | null)[] | null;
    after?: string | null;
    pageSize?: number | null;
    sortBy?: RoomOrder | null;
    priceLte?: number | null;
    priceGte?: number | null;
}
