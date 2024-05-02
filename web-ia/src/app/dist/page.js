"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var algorithmCard_1 = require("./components/algorithmCard");
require("./App.css");
var algorithms = [
    {
        title: "Algorithm 1",
        description: "Description for Algorithm 1"
    },
    {
        title: "Algorithm 2",
        description: "Description for Algorithm 2"
    },
];
var App = function () {
    return (react_1["default"].createElement(material_1.Container, { maxWidth: "md" },
        react_1["default"].createElement(material_1.Grid, { container: true, spacing: 4 }, algorithms.map(function (algorithm, index) { return (react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, sm: 6, md: 4, key: index },
            react_1["default"].createElement(algorithmCard_1["default"], { title: algorithm.title, description: algorithm.description }))); }))));
};
exports["default"] = App;
