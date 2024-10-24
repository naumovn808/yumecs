"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["slider"],{

/***/ "./utils/slider.js":
/*!*************************!*\
  !*** ./utils/slider.js ***!
  \*************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slider: function() { return /* binding */ slider; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

function slider() {
  const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider", {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3e3,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    speed: 800,
    pagination: {
      el: ".pagination",
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
      clickable: true
    }
  });
}


/***/ })

}]);
//# sourceMappingURL=slider.js.map