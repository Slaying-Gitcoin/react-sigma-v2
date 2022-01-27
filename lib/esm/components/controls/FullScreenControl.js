"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullScreenControl = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const useFullScreen_1 = require("../../hooks/useFullScreen");
const FullScreenControl = ({ id, className, style, customEnterFullScreen, customExitFullScreen, }) => {
    const { isFullScreen, toggle } = (0, useFullScreen_1.useFullScreen)();
    const buttonClass = (isFullScreen && !customExitFullScreen) || (!isFullScreen && !customEnterFullScreen) ? "default" : "";
    const props = {
        className: `react-sigma-control-${isFullScreen ? "normalscreen" : "fullscreen"} ${className ? className : ""}`,
        id,
        style,
    };
    if (!document.fullscreenEnabled)
        return null;
    return (react_1.default.createElement("div", Object.assign({}, props),
        react_1.default.createElement("button", { className: buttonClass, onClick: toggle, title: "Toggle Fullscreen" }, isFullScreen ? customExitFullScreen : customEnterFullScreen)));
};
exports.FullScreenControl = FullScreenControl;
//# sourceMappingURL=FullScreenControl.js.map