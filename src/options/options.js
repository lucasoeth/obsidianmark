"use strict";

import { DEFAULT_OPTIONS } from "../constants.js";

let options = {};

options._loadOptions = function () {
  chrome.storage.local.get(DEFAULT_OPTIONS, function (items) {
    document.getElementById("vault-name").value = items.vaultName;
    document.getElementById("vault-folder").value = items.vaultFolder;
    document.getElementById("default-tags").value = items.defaultTags;
  });
};

options._onOptionChanged = function ({ target }) {
  let optionKey, optionType, optionValue;

  optionKey = target.getAttribute("name");
  // convert name to camelCase from kebab-case
  optionKey = optionKey.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });

  optionType = target.getAttribute("type");

  switch (optionType) {
    case "checkbox":
      optionValue = target.checked;
      break;
    default:
      optionValue = target.value;
  }

  chrome.storage.local.set({
    [optionKey]: optionValue,
  });
};

options._onDocumentLoaded = function () {
  // Toggle sections
  // document.querySelectorAll(".section-title").forEach((title) => {
  //   title.addEventListener("click", () => {
  //     const content = title.nextElementSibling;
  //     content.style.display =
  //       content.style.display === "block" ? "none" : "block";
  //     title.querySelector(".toggle").textContent =
  //       content.style.display === "block" ? "▼" : "▶";
  //   });
  // });

  // Load options
  options._loadOptions();

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", options._onOptionChanged);
  });
};

document.addEventListener("DOMContentLoaded", options._onDocumentLoaded);
