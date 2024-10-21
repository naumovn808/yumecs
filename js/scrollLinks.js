"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["scrollLinks"],{

/***/ "./helpers/scroll-links.js":
/*!*********************************!*\
  !*** ./helpers/scroll-links.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollLinks: function() { return /* binding */ scrollLinks; }
/* harmony export */ });
function scrollLinks() {
  let isScrolling;
  document.querySelector(".page-links").addEventListener("scroll", () => {
    const links = document.querySelectorAll(".page-links a");
    links.forEach((link) => link.style.pointerEvents = "none");
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      links.forEach((link) => link.style.pointerEvents = "");
    }, 100);
  });
}


/***/ })

}]);
//# sourceMappingURL=scrollLinks.js.map