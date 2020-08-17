export interface RoomPricingField_pricing_priceRangeUndiscounted_start_gross {
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
export interface RoomPricingField_pricing_priceRangeUndiscounted_start_net {
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
export interface RoomPricingField_pricing_priceRangeUndiscounted_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomPricingField_pricing_priceRangeUndiscounted_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomPricingField_pricing_priceRangeUndiscounted_start_net;
}
export interface RoomPricingField_pricing_priceRangeUndiscounted_stop_gross {
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
export interface RoomPricingField_pricing_priceRangeUndiscounted_stop_net {
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
export interface RoomPricingField_pricing_priceRangeUndiscounted_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomPricingField_pricing_priceRangeUndiscounted_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomPricingField_pricing_priceRangeUndiscounted_stop_net;
}
export interface RoomPricingField_pricing_priceRangeUndiscounted {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: RoomPricingField_pricing_priceRangeUndiscounted_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: RoomPricingField_pricing_priceRangeUndiscounted_stop | null;
}
export interface RoomPricingField_pricing_priceRange_start_gross {
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
export interface RoomPricingField_pricing_priceRange_start_net {
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
export interface RoomPricingField_pricing_priceRange_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomPricingField_pricing_priceRange_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomPricingField_pricing_priceRange_start_net;
}
export interface RoomPricingField_pricing_priceRange_stop_gross {
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
export interface RoomPricingField_pricing_priceRange_stop_net {
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
export interface RoomPricingField_pricing_priceRange_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: RoomPricingField_pricing_priceRange_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: RoomPricingField_pricing_priceRange_stop_net;
}
export interface RoomPricingField_pricing_priceRange {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: RoomPricingField_pricing_priceRange_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: RoomPricingField_pricing_priceRange_stop | null;
}
export interface RoomPricingField_pricing {
    __typename: "RoomPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The undiscounted price range of the room variants.
     */
    priceRangeUndiscounted: RoomPricingField_pricing_priceRangeUndiscounted | null;
    /**
     * The discounted price range of the room variants.
     */
    priceRange: RoomPricingField_pricing_priceRange | null;
}
export interface RoomPricingField {
    __typename: "Room";
    /**
     * Lists the storefront room's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: RoomPricingField_pricing | null;
}
