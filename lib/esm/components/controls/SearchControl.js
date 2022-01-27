"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchControl = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importStar)(require("react"));
const useSigma_1 = require("../../hooks/useSigma");
const useCamera_1 = require("../../hooks/useCamera");
const SearchControl = ({ id, className, style }) => {
    const sigma = (0, useSigma_1.useSigma)();
    const { gotoNode } = (0, useCamera_1.useCamera)();
    const [search, setSearch] = (0, react_1.useState)("");
    const [values, setValues] = (0, react_1.useState)([]);
    const [selected, setSelected] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const newValues = [];
        if (!selected && search.length > 1) {
            sigma.getGraph().forEachNode((key, attributes) => {
                if (attributes.label && attributes.label.toLowerCase().includes(search.toLowerCase()))
                    newValues.push({ id: key, label: attributes.label });
            });
        }
        setValues(newValues);
    }, [search]);
    (0, react_1.useEffect)(() => {
        if (!selected) {
            return;
        }
        sigma.getGraph().setNodeAttribute(selected, "highlighted", true);
        gotoNode(selected);
        return () => {
            sigma.getGraph().setNodeAttribute(selected, "highlighted", false);
        };
    }, [selected]);
    const onInputChange = (e) => {
        const searchString = e.target.value;
        const valueItem = values.find(value => value.label === searchString);
        if (valueItem) {
            setSearch(valueItem.label);
            setValues([]);
            setSelected(valueItem.id);
        }
        else {
            setSelected(null);
            setSearch(searchString);
        }
    };
    const props = {
        className: `react-sigma-search ${className ? className : ""}`,
        id,
        style,
    };
    return (react_1.default.createElement("div", Object.assign({}, props),
        react_1.default.createElement("input", { type: "text", placeholder: "Search...", list: "nodes", value: search, onChange: onInputChange }),
        react_1.default.createElement("datalist", { id: "nodes" }, values.map((value) => (react_1.default.createElement("option", { key: value.id, value: value.label }, value.label))))));
};
exports.SearchControl = SearchControl;
//# sourceMappingURL=SearchControl.js.map