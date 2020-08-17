import { ApolloClient, ObservableQuery, QueryOptions as ApolloQueryOptions } from "apollo-client";
import { RequireOnlyOne } from "../tsHelpers";
import { OrderByToken, OrderByTokenVariables } from "./gqlTypes/OrderByToken";
import { UserOrderByToken, UserOrderByTokenVariables } from "./gqlTypes/UserOrderByToken";
import { Attributes, AttributesVariables } from "./gqlTypes/Attributes";
import { RoomDetails, RoomDetailsVariables } from "./gqlTypes/RoomDetails";
import { RoomList, RoomListVariables } from "./gqlTypes/RoomList";
import { CategoryDetails, CategoryDetailsVariables } from "./gqlTypes/CategoryDetails";
import { GetShop } from "./gqlTypes/GetShop";
import { OrdersByUser, OrdersByUserVariables } from "./gqlTypes/OrdersByUser";
import { VariantsRooms, VariantsRoomsVariables } from "./gqlTypes/VariantsRooms";
declare type QueryOptions<T = {}> = T extends {
    [n: string]: never;
} ? Omit<ApolloQueryOptions<{}>, "query"> : RequireOnlyOne<Omit<ApolloQueryOptions<T>, "query">, "variables">;
export declare const QUERIES: {
    Attributes: <TCacheShape>(client: ApolloClient<TCacheShape>, options: QueryOptions<AttributesVariables>) => ObservableQuery<Attributes, any>;
    CategoryDetails: <TCacheShape_1>(client: ApolloClient<TCacheShape_1>, options: QueryOptions<CategoryDetailsVariables>) => ObservableQuery<CategoryDetails, any>;
    GetShopDetails: <TCacheShape_2>(client: ApolloClient<TCacheShape_2>, options: QueryOptions<null>) => ObservableQuery<GetShop, any>;
    OrderDetails: <TCacheShape_3>(client: ApolloClient<TCacheShape_3>, options: QueryOptions<OrderByTokenVariables>) => ObservableQuery<OrderByToken, any>;
    OrderDetailsByUser: <TCacheShape_4>(client: ApolloClient<TCacheShape_4>, options: QueryOptions<UserOrderByTokenVariables>) => ObservableQuery<UserOrderByToken, any>;
    OrdersByUser: <TCacheShape_5>(client: ApolloClient<TCacheShape_5>, options: QueryOptions<OrdersByUserVariables>) => ObservableQuery<OrdersByUser, any>;
    RoomDetails: <TCacheShape_6>(client: ApolloClient<TCacheShape_6>, options: QueryOptions<RoomDetailsVariables>) => ObservableQuery<RoomDetails, any>;
    RoomList: <TCacheShape_7>(client: ApolloClient<TCacheShape_7>, options: QueryOptions<RoomListVariables>) => ObservableQuery<RoomList, any>;
    VariantsRooms: <TCacheShape_8>(client: ApolloClient<TCacheShape_8>, options: QueryOptions<VariantsRoomsVariables>) => ObservableQuery<VariantsRooms, any>;
};
export declare type QUERIES = typeof QUERIES;
export {};
