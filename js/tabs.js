"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["tabs"],{

/***/ "./utils/tabs.js":
/*!***********************!*\
  !*** ./utils/tabs.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabs: function() { return /* binding */ tabs; }
/* harmony export */ });
function tabs() {
  const tabsLinks = document.querySelectorAll(".tabs__link");
  const tabsContent = document.querySelectorAll("[data-tab-content]");
  const bg = document.querySelector(".tabs__bg");
  if (!tabsLinks || !tabsContent || !bg) return;
  tabsLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      tabsLinks.forEach((btn) => btn.classList.remove("active"));
      tabsContent.forEach((tab) => tab.classList.remove("active"));
      link.classList.add("active");
      const targetTab = document.querySelector(`[data-tab-content="${link.dataset.tab}"]`);
      if (targetTab) {
        targetTab.classList.add("active");
      }
      bg.style.transform = `translateX(${index * 100}%)`;
    });
  });
}
;


/***/ })

}]);
//# sourceMappingURL=tabs.js.map