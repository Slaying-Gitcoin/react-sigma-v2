"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFullScreen = void 0;
const react_1 = require("react");
const context_1 = require("./context");
function toggleFullScreen(dom) {
    if (document.fullscreenElement !== dom) {
        dom.requestFullscreen();
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
function useFullScreen() {
    const { container } = (0, context_1.useSigmaContext)();
    const [isFullScreen, setFullScreen] = (0, react_1.useState)(false);
    const toggleState = () => setFullScreen(v => !v);
    (0, react_1.useEffect)(() => {
        document.addEventListener("fullscreenchange", toggleState);
        return () => document.removeEventListener("fullscreenchange", toggleState);
    }, [toggleState]);
    const toggle = (0, react_1.useCallback)(() => {
        toggleFullScreen(container);
    }, [container]);
    return {
        toggle,
        isFullScreen,
    };
}
exports.useFullScreen = useFullScreen;
//# sourceMappingURL=useFullScreen.js.map