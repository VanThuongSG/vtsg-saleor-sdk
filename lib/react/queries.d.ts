export declare const useRoomDetails: (variables: import("../queries/gqlTypes/RoomDetails").RoomDetailsVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/RoomDetails").RoomDetailsVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/RoomDetails").RoomDetailsVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/RoomDetails").RoomDetails_room | null) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/RoomDetails").RoomDetailsVariables, "id" | "countryCode">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/RoomDetails").RoomDetailsVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/RoomDetails").RoomDetails_room | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useRoomList: (variables: import("../queries/gqlTypes/RoomList").RoomListVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/RoomList").RoomListVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/RoomList").RoomListVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/RoomList").RoomList_rooms | null) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/RoomList").RoomListVariables, "id" | "attributes" | "after" | "pageSize" | "sortBy" | "priceLte" | "priceGte">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/RoomList").RoomListVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/RoomList").RoomList_rooms | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useShopDetails: (options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<null>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<null>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/GetShop").GetShop | null) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: never, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: null | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/GetShop").GetShop | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useOrderDetails: (variables: import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables | import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    onUpdate: (data: import("../queries/gqlTypes/UserOrderByToken").UserOrderByToken_orderByToken | import("../queries/gqlTypes/OrderByToken").OrderByToken_orderByToken | null) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables | import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables, "token">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables | import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/UserOrderByToken").UserOrderByToken_orderByToken | import("../queries/gqlTypes/OrderByToken").OrderByToken_orderByToken | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useOrdersByUser: (variables: import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/OrdersByUser").OrdersByUser_me_orders | null) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables, "after" | "perPage">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/OrdersByUser").OrdersByUser_me_orders | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useCategoryDetails: (variables: import("../queries/gqlTypes/CategoryDetails").CategoryDetailsVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/CategoryDetails").CategoryDetailsVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/CategoryDetails").CategoryDetailsVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/CategoryDetails").CategoryDetails_category | null) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/CategoryDetails").CategoryDetailsVariables, "id">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/CategoryDetails").CategoryDetailsVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/CategoryDetails").CategoryDetails_category | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useAtrributes: (variables: import("../queries/gqlTypes/Attributes").AttributesVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/Attributes").AttributesVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/Attributes").AttributesVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/Attributes").Attributes_attributes | null) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/Attributes").AttributesVariables, "id">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/Attributes").AttributesVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/Attributes").Attributes_attributes | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useVariantsRooms: (variables: import("../queries/gqlTypes/VariantsRooms").VariantsRoomsVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/VariantsRooms").VariantsRoomsVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/VariantsRooms").VariantsRoomsVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/VariantsRooms").VariantsRooms_roomVariants | null) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/VariantsRooms").VariantsRoomsVariables, "ids">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/VariantsRooms").VariantsRoomsVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/VariantsRooms").VariantsRooms_roomVariants | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
