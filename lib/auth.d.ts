import { ApolloLink } from "apollo-link";
export declare const authEvent: Event;
export declare function getAuthToken(): string | null;
export declare function setAuthToken(token: string): void;
export declare const invalidTokenLinkWithTokenHandler: (tokenExpirationCallback: () => void) => ApolloLink;
export declare const authLink: ApolloLink;
