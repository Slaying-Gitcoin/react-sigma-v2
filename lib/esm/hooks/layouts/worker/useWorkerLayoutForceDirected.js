"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWorkerLayoutForceDirected = void 0;
const tslib_1 = require("tslib");
const worker_1 = (0, tslib_1.__importDefault)(require("graphology-layout-force/worker"));
const index_1 = require("./index");
exports.useWorkerLayoutForceDirected = (0, index_1.useWorkerLayoutFactory)(worker_1.default);
//# sourceMappingURL=useWorkerLayoutForceDirected.js.map