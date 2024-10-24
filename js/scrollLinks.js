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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

function scrollLinks() {
  const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".links-container", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: false,
    grabCursor: true
  });
}


/***/ })

}]);
//# sourceMappingURL=scrollLinks.js.map