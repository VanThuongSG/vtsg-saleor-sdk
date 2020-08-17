"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERIES = void 0;
const AttributesList = __importStar(require("./attributes"));
const Category = __importStar(require("./category"));
const Orders = __importStar(require("./orders"));
const Room = __importStar(require("./rooms"));
const Shop = __importStar(require("./shop"));
// TODO: Add ability to pass custom fragments to queries
exports.QUERIES = {
    Attributes: (client, options) => client.watchQuery(Object.assign({ query: AttributesList.attributes }, options)),
    CategoryDetails: (client, options) => client.watchQuery(Object.assign({ query: Category.categoryQuery }, options)),
    GetShopDetails: (client, options) => client.watchQuery(Object.assign({ query: Shop.getShop }, options)),
    OrderDetails: (client, options) => client.watchQuery(Object.assign({ query: Orders.orderDetailsByTokenQuery }, options)),
    OrderDetailsByUser: (client, options) => client.watchQuery(Object.assign({ query: Orders.userOrderDetailsByTokenQuery }, options)),
    OrdersByUser: (client, options) => client.watchQuery(Object.assign({ query: Orders.ordersByUser }, options)),
    RoomDetails: (client, options) => client.watchQuery(Object.assign({ query: Room.roomDetails }, options)),
    RoomList: (client, options) => client.watchQuery(Object.assign({ query: Room.roomListDetails }, options)),
    VariantsRooms: (client, options) => client.watchQuery(Object.assign({ query: Room.variantsRooms }, options)),
};
//# sourceMappingURL=index.js.map