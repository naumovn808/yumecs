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
    const contents = accordion.querySelectorAll("[data-accordion-content]");
    headers.forEach((header, index) => {
      header.addEventListener("click", () => {
        const content = contents[index];
        const isOpen = content.classList.contains("active");
        document.querySelectorAll("[data-accordion-header]").forEach((h) => {
          h.classList.remove("active");
        });
        document.querySelectorAll("[data-accordion-content]").forEach((c) => {
          c.classList.remove("active");
          c.style.height = "0";
        });
        if (!isOpen) {
          header.classList.add("active");
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