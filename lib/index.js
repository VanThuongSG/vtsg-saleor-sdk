"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleorManager = void 0;
const api_1 = require("./api");
const APIProxy_1 = __importDefault(require("./api/APIProxy"));
class SaleorManager {
    constructor(client, config) {
        this.onSaleorAPIChange = () => {
            if (this.apiChangeListener) {
                this.apiChangeListener(this.api);
            }
        };
        this.apiProxy = new APIProxy_1.default(client);
        this.api = new api_1.SaleorAPI(client, this.apiProxy, config, this.onSaleorAPIChange);
    }
    /**
     * Use this method to obtain current API and listen to its update on occured changes within it.
     * @param apiChangeListener Function called to get an API and called on every API update.
     */
    connect(apiChangeListener) {
        this.apiChangeListener = apiChangeListener;
        this.apiChangeListener(this.api);
    }
}
exports.SaleorManager = SaleorManager;
__exportStar(require("./auth"), exports);
__exportStar(require("./cache"), exports);
__exportStar(require("./links"), exports);
__exportStar(require("./client"), exports);
__exportStar(require("./gqlTypes/globalTypes"), exports);
// FIXME: It's imported here because it's not a monorepo yet
/* eslint-disable import/no-cycle */
__exportStar(require("./react"), exports);
/* eslint-enable */
//# sourceMappingURL=index.js.map