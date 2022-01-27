"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutForceDirected = void 0;
const tslib_1 = require("tslib");
const graphology_layout_force_1 = (0, tslib_1.__importDefault)(require("graphology-layout-force"));
const index_1 = require("./index");
exports.useLayoutForceDirected = (0, index_1.useLayoutFactory)(graphology_layout_force_1.default, { maxIterations: 100 });
//# sourceMappingURL=useLayoutForceDirected.js.map