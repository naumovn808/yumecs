"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["goBack"],{

/***/ "./utils/go-back.js":
/*!**************************!*\
  !*** ./utils/go-back.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goBack: function() { return /* binding */ goBack; }
/* harmony export */ });
function goBack() {
  const btn = document.getElementById("go-back");
  if (!btn) return;
  btn.addEventListener("click", function() {
    window.history.back();
  });
  if (typeof Telegram !== "undefined" && Telegram.WebApp) {
    let handleBack = function() {
      if (window.location.search && window.location.pathname !== "/") {
        history.back();
      } else {
        location.href = "/";
      }
    };
    btn.addEventListener("click", () => {
      Telegram.WebApp.BackButton.onClick(() => {
        handleBack();
      });
      Telegram.WebApp.BackButton.show();
      Telegram.WebApp.BackButton.click();
    });
  } else {
    console.warn("Telegram WebApp API \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D.");
  }
}


/***/ })

}]);
//# sourceMappingURL=goBack.js.map