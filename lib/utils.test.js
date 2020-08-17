"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
test("Test for empty items", () => {
    expect(utils_1.filterNotEmptyArrayItems(undefined)).toBe(false);
    expect(utils_1.filterNotEmptyArrayItems(null)).toBe(false);
});
test("Test for non-empty items", () => {
    expect(utils_1.filterNotEmptyArrayItems("I'm non empty")).toBe(true);
    expect(utils_1.filterNotEmptyArrayItems({ hello: "world" })).toBe(true);
});
//# sourceMappingURL=utils.test.js.map