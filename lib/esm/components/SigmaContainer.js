"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigmaContainer = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importStar)(require("react"));
const lodash_1 = require("lodash");
const graphology_1 = (0, tslib_1.__importDefault)(require("graphology"));
const sigma_1 = require("sigma");
const context_1 = require("../hooks/context");
const SigmaContainer = ({ graphOptions, id, className, style, initialSettings, children, }) => {
    const rootRef = (0, react_1.useRef)(null);
    const containerRef = (0, react_1.useRef)(null);
    const props = { className: `react-sigma-v2 ${className ? className : ""}`, id, style };
    const [sigma, setSigma] = (0, react_1.useState)(null);
    const settings = (0, react_1.useRef)();
    if (!(0, lodash_1.isEqual)(settings.current, initialSettings))
        settings.current = initialSettings;
    const graph = (0, react_1.useRef)();
    if (!(0, lodash_1.isEqual)(graph.current, graphOptions))
        graph.current = graphOptions;
    (0, react_1.useEffect)(() => {
        let instance = null;
        if (containerRef.current !== null) {
            instance = new sigma_1.Sigma(new graphology_1.default(graph.current), containerRef.current, settings.current);
            setSigma(instance);
        }
        return () => {
            setSigma(() => {
                if (instance) {
                    instance.kill();
                }
                return null;
            });
        };
    }, [containerRef, graph, settings]);
    const context = (0, react_1.useMemo)(() => (sigma && rootRef.current ? { sigma, container: rootRef.current } : null), [sigma, rootRef.current]);
    const contents = context !== null ? react_1.default.createElement(context_1.SigmaProvider, { value: context }, children) : null;
    return (react_1.default.createElement("div", Object.assign({}, props, { ref: rootRef }),
        react_1.default.createElement("div", { className: "sigma-container", ref: containerRef }),
        contents));
};
exports.SigmaContainer = SigmaContainer;
//# sourceMappingURL=SigmaContainer.js.map