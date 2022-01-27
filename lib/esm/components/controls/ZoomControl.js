"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomControl = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const useCamera_1 = require("../../hooks/useCamera");
const ZoomControl = ({ className, style, animationDuration = 200, customZoomIn, customZoomOut, customZoomCenter, }) => {
    const { zoomIn, zoomOut, reset } = (0, useCamera_1.useCamera)({ duration: animationDuration, factor: 1.5 });
    const props = {
        className,
        style,
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", Object.assign({}, props, { className: `react-sigma-control-zoom-in ${className ? className : ""}` }),
            react_1.default.createElement("button", { className: customZoomIn ? "" : "default", onClick: () => zoomIn(), title: "Zoom In" }, customZoomIn)),
        react_1.default.createElement("div", Object.assign({}, props, { className: `react-sigma-control-zoom-out ${className ? className : ""}` }),
            react_1.default.createElement("button", { className: customZoomOut ? "" : "default", onClick: () => zoomOut(), title: "Zoom Out" }, customZoomOut)),
        react_1.default.createElement("div", Object.assign({}, props, { className: `react-sigma-control-zoom-center ${className ? className : ""}` }),
            react_1.default.createElement("button", { className: customZoomCenter ? "" : "default", onClick: () => reset(), title: "See whole graph" }, customZoomCenter))));
};
exports.ZoomControl = ZoomControl;
//# sourceMappingURL=ZoomControl.js.map