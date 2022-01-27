"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerLayoutControl = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importStar)(require("react"));
const useSigma_1 = require("../../../hooks/useSigma");
function WorkerLayoutControl({ id, className, style, layout, settings, autoRunFor, customStartLayout, customStopLayout, }) {
    const sigma = (0, useSigma_1.useSigma)();
    const { stop, start, isRunning } = layout(settings);
    const buttonClass = (isRunning === true && !customStopLayout) || (isRunning === false && !customStartLayout) ? "default" : "";
    const props = {
        className: `react-sigma-control-layout ${isRunning === true ? "running" : "stopped"} ${className ? className : ""}`,
        id,
        style,
    };
    (0, react_1.useEffect)(() => {
        if (!sigma) {
            return;
        }
        let timeout = null;
        if (autoRunFor && autoRunFor > -1 && sigma.getGraph().order > 0) {
            start();
            timeout =
                autoRunFor > 0
                    ? window.setTimeout(() => {
                        stop();
                    }, autoRunFor)
                    : null;
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [autoRunFor, start, stop, sigma]);
    return (react_1.default.createElement("div", Object.assign({}, props),
        react_1.default.createElement("button", { className: buttonClass, onClick: () => (isRunning ? stop() : start()), title: isRunning ? "Stop the layout animation" : "Start the layout animation" }, isRunning === true ? customStopLayout : customStartLayout)));
}
exports.WorkerLayoutControl = WorkerLayoutControl;
//# sourceMappingURL=WorkerLayoutControl.js.map