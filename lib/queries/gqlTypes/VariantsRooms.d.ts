export interface VariantsRooms_roomVariants_edges_node_room_roomType {
    __typename: "RoomType";
    isShippingRequired: boolean;
}
export interface VariantsRooms_roomVariants_edges_node_room {
    __typename: "Room";
    /**
     * The ID of the object.
     */
    id: string;
    roomType: VariantsRooms_roomVariants_edges_node_room_roomType;
}
export interface VariantsRooms_roomVariants_edges_node {
    __typename: "RoomVariant";
    /**
     * The ID of the object.
     */
    id: string;
    room: VariantsRooms_roomVariants_edges_node_room;
}
export interface VariantsRooms_roomVariants_edges {
    __typename: "RoomVariantCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: VariantsRooms_roomVariants_edges_node;
}
export interface VariantsRooms_roomVariants {
    __typename: "RoomVariantCountableConnection";
    edges: VariantsRooms_roomVariants_edges[];
}
export interface VariantsRooms {
    /**
     * List of room variants.
     */
    roomVariants: VariantsRooms_roomVariants | null;
}
export interface VariantsRoomsVariables {
    ids?: (string | null)[] | null;
}
