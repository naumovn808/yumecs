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
  const dropdownTriggers = document.querySelectorAll(".nav-link-dropdown");
  if (!dropdownTriggers.length) return;
  dropdownTriggers.forEach((trigger) => {
    const dropdownMenu = trigger.querySelector(".dropdown-menu");
    let originalParent = null;
    let placeholder = null;
    if (!dropdownMenu) return;
    function moveDropdownToBody() {
      if (!dropdownMenu || !dropdownMenu.parentNode) return;
      originalParent = dropdownMenu.parentNode;
      placeholder = document.createElement("div");
      originalParent.insertBefore(placeholder, dropdownMenu);
      document.body.appendChild(dropdownMenu);
      dropdownMenu.classList.add("active");
      trigger.classList.add("open");
    }
    function restoreDropdown() {
      if (originalParent && placeholder) {
        dropdownMenu.classList.remove("active");
        trigger.classList.remove("open");
        originalParent.insertBefore(dropdownMenu, placeholder);
        placeholder.remove();
        originalParent = null;
        placeholder = null;
      }
    }
    function toggleDropdown(event) {
      event.stopPropagation();
      dropdownTriggers.forEach((otherTrigger) => {
        if (otherTrigger !== trigger) {
          const otherMenu = otherTrigger.querySelector(".dropdown-menu");
          if (otherMenu?.classList.contains("active")) {
            otherTrigger._restoreDropdown?.();
          }
        }
      });
      if (dropdownMenu.classList.contains("active")) {
        restoreDropdown();
      } else {
        moveDropdownToBody();
      }
    }
    function closeDropdown(event) {
      if (dropdownMenu && !dropdownMenu.contains(event.target) && event.target !== trigger) {
        restoreDropdown();
      }
    }
    trigger.addEventListener("click", toggleDropdown);
    document.addEventListener("click", closeDropdown);
    window.addEventListener("resize", () => {
      if (dropdownMenu.classList.contains("active")) {
        restoreDropdown();
      }
    });
    trigger._restoreDropdown = restoreDropdown;
  });
}


/***/ })

}]);
//# sourceMappingURL=dropdown.js.map