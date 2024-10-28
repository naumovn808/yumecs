"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["details"],{

/***/ "./utils/details.js":
/*!**************************!*\
  !*** ./utils/details.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   details: function() { return /* binding */ details; }
/* harmony export */ });
function details() {
  document.addEventListener("click", function(event) {
    const details2 = document.querySelectorAll(".nav-link-dropdown");
    details2.forEach((detail) => {
      if (!detail.contains(event.target)) {
        detail.removeAttribute("open");
      }
    });
  });
}


/***/ })

}]);
//# sourceMappingURL=details.js.map