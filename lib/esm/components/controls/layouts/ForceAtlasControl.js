"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceAtlasControl = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const useWorkerLayoutForceAtlas2_1 = require("../../../hooks/layouts/worker/useWorkerLayoutForceAtlas2");
const WorkerLayoutControl_1 = require("./WorkerLayoutControl");
const ForceAtlasControl = props => {
    const workerLayoutProps = Object.assign(Object.assign({}, props), { settings: props.settings || {}, layout: useWorkerLayoutForceAtlas2_1.useWorkerLayoutForceAtlas2 });
    return react_1.default.createElement(WorkerLayoutControl_1.WorkerLayoutControl, Object.assign({}, workerLayoutProps));
};
exports.ForceAtlasControl = ForceAtlasControl;
//# sourceMappingURL=ForceAtlasControl.js.map