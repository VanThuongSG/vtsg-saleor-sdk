import { SaleorAPI } from "../api";
export declare const hookFactory: <T extends "auth" | "cart" | "checkout" | "legacyAPIProxy">(query: T) => () => SaleorAPI[T];
