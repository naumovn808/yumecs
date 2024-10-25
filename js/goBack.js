"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["goBack"],{

/***/ "./utils/go-back.js":
/*!**************************!*\
  !*** ./utils/go-back.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goBack: function() { return /* binding */ goBack; }
/* harmony export */ });
function goBack() {
  const btn = document.getElementById("go-back");
  if (!btn) return;
  btn.addEventListener("click", function() {
    window.history.back();
  });
}


/***/ })

}]);
//# sourceMappingURL=goBack.js.map