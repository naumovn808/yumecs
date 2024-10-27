"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["initAccordion"],{

/***/ "./utils/accordeon.js":
/*!****************************!*\
  !*** ./utils/accordeon.js ***!
  \****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initAccordion: function() { return /* binding */ initAccordion; }
/* harmony export */ });
function initAccordion() {
  const accordions = document.querySelectorAll("[data-accordion]");
  accordions.forEach((accordion) => {
    const headers = accordion.querySelectorAll("[data-accordion-header]");
    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        header.classList.toggle("active");
        const isOpen = content.classList.contains("active");
        accordion.querySelectorAll("[data-accordion-content]").forEach((section) => {
          section.classList.remove("active");
          section.style.height = "0";
        });
        if (!isOpen) {
          content.classList.add("active");
          content.style.height = `${content.scrollHeight}px`;
        }
      });
    });
  });
}


/***/ })

}]);
//# sourceMappingURL=initAccordion.js.map