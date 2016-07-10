// ==UserScript==
// @name         StackBarBanner
// @namespace    http://stackapps.com
// @version      0.1
// @description  removes the bar from Stack Exchange sites
// @author       IAP-Reloaded
// @match        http*://*.stackexchange.com*
// @grant        none
// ==/UserScript==

document.getElementsByClassName("topbar").remove();
