import { DEFAULT_OPTIONS } from "./constants.js";

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.startsWith("http://") || tab.url.startsWith("https://")) {
    chrome.storage.local.get(DEFAULT_OPTIONS, (options) => {
      // Inject options into the page
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: injectOptions,
        args: [options]
      }).then(() => {
        // Now inject and execute your content scripts
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["libs/turndown.cjs.js", "libs/readability.js", "content.js"],
        });
      });
    });
  }
});

function injectOptions(options) {
  // Inject options as a global variable
  window.obsidianMarkOptions = options;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "obsidianmark_open_obsidian") {
    chrome.tabs.update({
      url: message.url,
    });
  }
});
