"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthJobs = void 0;
const types_1 = require("../../api/Auth/types");
class AuthJobs {
    constructor(localStorageHandler, apolloClientManager) {
        this.provideUser = () => __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.apolloClientManager.getUser();
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorAuthTypes.GET_USER,
                    },
                };
            }
            return {
                data,
            };
        });
        this.signIn = ({ email, password, }) => __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.apolloClientManager.signIn(email, password);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorAuthTypes.SIGN_IN,
                    },
                };
            }
            this.localStorageHandler.setSignInToken((data === null || data === void 0 ? void 0 : data.token) || null);
            return {
                data,
            };
        });
        this.signOut = () => __awaiter(this, void 0, void 0, function* () {
            this.localStorageHandler.clear();
            yield this.apolloClientManager.signOut();
            return {};
        });
        this.apolloClientManager = apolloClientManager;
        this.localStorageHandler = localStorageHandler;
    }
}
exports.AuthJobs = AuthJobs;
//# sourceMappingURL=AuthJobs.js.map