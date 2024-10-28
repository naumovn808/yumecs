"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["dropdown"],{

/***/ "./utils/dropdown-menu.js":
/*!********************************!*\
  !*** ./utils/dropdown-menu.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dropdown: function() { return /* binding */ dropdown; }
/* harmony export */ });
function dropdown() {
  const dropdownTrigger = document.querySelector(".nav-link-dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  if (!dropdownTrigger || !dropdownMenu) return;
  function toggleDropdown() {
    dropdownMenu.classList.toggle("active");
  }
  function closeDropdown(event) {
    if (!dropdownMenu.contains(event.target) && event.target !== dropdownTrigger) {
      dropdownMenu.classList.remove("active");
    }
  }
  dropdownTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown();
  });
  document.addEventListener("click", closeDropdown);
}


/***/ })

}]);
//# sourceMappingURL=dropdown.js.map