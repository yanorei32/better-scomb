// ==UserScript==
// @name        BetterScomb 00 Fix LMS Calender wordwrap
// @description Fix the LMS Calender wordwrap issue
// @author      yanorei32
// @supportURL  https://github.com/yanorei32/better-scomb/issues
// @namespace   https://github.com/yanorei32/better-scomb/
// @website     https://github.com/yanorei32/better-scomb/
// @include     https://scomb.shibaura-it.ac.jp/portal/contents/lms*
// @updateURL   https://github.com/yanorei32/better-scomb/raw/master/00_fix_lms_calender_wordwrap.user.js
// @version     0.1.0
// @grant       none
// @license     BSD 2-Clause License
// ==/UserScript==

(function() {
  const e = document.createElement('style');

  e.innerHTML = `
form#lmsStudentForm tr.classTitle td {
  overflow-wrap: anywhere;
}`;

  document.body.appendChild(e);
})();
