export interface BasicRoomFields_thumbnail {
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
export interface BasicRoomFields_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface BasicRoomFields {
    __typename: "Room";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    /**
     * The main thumbnail for a room.
     */
    thumbnail: BasicRoomFields_thumbnail | null;
    /**
     * The main thumbnail for a room.
     */
    thumbnail2x: BasicRoomFields_thumbnail2x | null;
}
