"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["inputNumbers"],{

/***/ "./utils/form.js":
/*!***********************!*\
  !*** ./utils/form.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputNumbers: function() { return /* binding */ inputNumbers; }
/* harmony export */ });
function inputNumbers() {
  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9.,]/g, "");
    });
    input.addEventListener("paste", (e) => {
      const pasteData = (e.clipboardData || window.Clipboard).getData("text");
      if (!/^\d+([.,]\d+)?$/.test(pasteData)) {
        e.preventDefault();
      }
    });
  });
}


/***/ })

}]);
//# sourceMappingURL=inputNumbers.js.map