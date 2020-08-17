export interface GetRooms_rooms_pageInfo {
    __typename: "PageInfo";
    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor: string | null;
    /**
     * When paginating forwards, are there more items?
     */
    hasNextPage: boolean;
}
export interface GetRooms_rooms_edges_node {
    __typename: "Room";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
}
export interface GetRooms_rooms_edges {
    __typename: "RoomCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: GetRooms_rooms_edges_node;
}
export interface GetRooms_rooms {
    __typename: "RoomCountableConnection";
    /**
     * Pagination data for this connection.
     */
    pageInfo: GetRooms_rooms_pageInfo;
    edges: GetRooms_rooms_edges[];
}
export interface GetRooms {
    /**
     * List of the shop's rooms.
     */
    rooms: GetRooms_rooms | null;
}
export interface GetRoomsVariables {
    cursor?: string | null;
    perPage?: number | null;
}
