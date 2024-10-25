"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["select"],{

/***/ "./utils/select.js":
/*!*************************!*\
  !*** ./utils/select.js ***!
  \*************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   select: function() { return /* binding */ select; }
/* harmony export */ });
function select() {
  const selectElement = document.querySelector(".select select");
  const svgIcon = document.querySelector(".select svg");
  if (!selectElement || !svgIcon) return;
  selectElement.addEventListener("focus", () => {
    svgIcon.classList.add("active");
  });
  selectElement.addEventListener("blur", () => {
    svgIcon.classList.remove("active");
  });
}


/***/ })

}]);
//# sourceMappingURL=select.js.map