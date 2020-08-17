"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVariantsRooms = exports.useAtrributes = exports.useCategoryDetails = exports.useOrdersByUser = exports.useOrderDetails = exports.useShopDetails = exports.useRoomList = exports.useRoomDetails = void 0;
const useQuery_1 = require("./useQuery");
exports.useRoomDetails = useQuery_1.queryWithVariablesFactory("getRoomDetails");
exports.useRoomList = useQuery_1.queryWithVariablesFactory("getRoomList");
exports.useShopDetails = useQuery_1.queryFactory("getShopDetails");
exports.useOrderDetails = useQuery_1.queryWithVariablesFactory("getOrderDetails");
exports.useOrdersByUser = useQuery_1.queryWithVariablesFactory("getOrdersByUser");
exports.useCategoryDetails = useQuery_1.queryWithVariablesFactory("getCategoryDetails");
exports.useAtrributes = useQuery_1.queryWithVariablesFactory("getAttributes");
exports.useVariantsRooms = useQuery_1.queryWithVariablesFactory("getVariantsRooms");
//# sourceMappingURL=queries.js.map