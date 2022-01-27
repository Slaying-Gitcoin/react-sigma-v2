"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetSettings = void 0;
const react_1 = require("react");
const useSigma_1 = require("./useSigma");
function useSetSettings() {
    const sigma = (0, useSigma_1.useSigma)();
    const [settings, setSettings] = (0, react_1.useState)({});
    (0, react_1.useEffect)(() => {
        if (!sigma || !settings) {
            return;
        }
        const prevSettings = {};
        Object.keys(settings).forEach(key => {
            prevSettings[key] = settings[key];
            sigma.setSetting(key, settings[key]);
        });
        return () => {
            Object.keys(prevSettings).forEach(key => {
                sigma.setSetting(key, prevSettings[key]);
            });
        };
    }, [sigma, settings]);
    return setSettings;
}
exports.useSetSettings = useSetSettings;
//# sourceMappingURL=useSetSettings.js.map