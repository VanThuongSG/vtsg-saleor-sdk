"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueuedJobs = void 0;
const Cart_1 = require("./Cart");
const Checkout_1 = require("./Checkout");
class QueuedJobs {
    constructor(localStorageHandler, apolloClientManager) {
        this.cart = new Cart_1.CartQueuedJobs(localStorageHandler, apolloClientManager);
        this.checkout = new Checkout_1.CheckoutQueuedJobs();
    }
}
exports.QueuedJobs = QueuedJobs;
//# sourceMappingURL=QueuedJobs.js.map