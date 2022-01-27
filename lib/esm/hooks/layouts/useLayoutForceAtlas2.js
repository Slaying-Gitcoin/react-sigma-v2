"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutForceAtlas2 = void 0;
const tslib_1 = require("tslib");
const graphology_layout_forceatlas2_1 = (0, tslib_1.__importDefault)(require("graphology-layout-forceatlas2"));
const index_1 = require("./index");
exports.useLayoutForceAtlas2 = (0, index_1.useLayoutFactory)(graphology_layout_forceatlas2_1.default, { iterations: 100 });
//# sourceMappingURL=useLayoutForceAtlas2.js.map