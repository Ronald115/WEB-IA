"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
require("./AlgorithmCard.css");
var AlgorithmCard = function (_a) {
    var title = _a.title, description = _a.description;
    return (react_1["default"].createElement(material_1.Card, { className: "algorithm-card" },
        react_1["default"].createElement(material_1.CardContent, null,
            react_1["default"].createElement(material_1.Typography, { variant: "h5", component: "h2" }, title),
            react_1["default"].createElement(material_1.Typography, null, description))));
};
exports["default"] = AlgorithmCard;
