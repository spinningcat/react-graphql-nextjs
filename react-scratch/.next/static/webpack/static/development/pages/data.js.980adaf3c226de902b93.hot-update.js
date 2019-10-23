webpackHotUpdate("static/development/pages/data.js",{

/***/ "./src/ComingData.js":
/*!***************************!*\
  !*** ./src/ComingData.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/data */ "./pages/data.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        {\n            user {\n                id\n                firstname\n                age\n            }\n        } \n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ComingData = function ComingData() {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject())
  }, function (_ref) {
    var loadPartialConfig = _ref.loadPartialConfig,
        error = _ref.error,
        data = _ref.data;

    if (loading) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
    }

    if (error) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Error : (");
    }

    return data.user.map(function (_ref2) {
      var currentData = _ref2.currentData;
      return console.log(currentData);
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_data__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: currentData
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ComingData);

/***/ })

})
//# sourceMappingURL=data.js.980adaf3c226de902b93.hot-update.js.map