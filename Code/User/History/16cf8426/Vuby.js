let currentTabId = null;

// Function to check if a tab is a YouTube tab
function isYouTubeTab(url) {
  return url.includes("youtube.com");
}

// Listener for tab activation (when a tab is switched to)
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (currentTabId !== null) {
      chrome.tabs.get(currentTabId, (currentTab) => {
        if (isYouTubeTab(currentTab.url) && !isYouTubeTab(tab.url)) {
          console.log("Switched away from YouTube tab to another tab.");
        }
      });
    }
    currentTabId = activeInfo.tabId;
  });
});

// Listener for tab updates (e.g., when the URL changes)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === currentTabId && changeInfo.status === 'complete') {
    if (currentTabId !== null) {
      chrome.tabs.get(currentTabId, (currentTab) => {
        if (isYouTubeTab(currentTab.url) && !isYouTubeTab(tab.url)) {
          console.log("Switched away from YouTube tab to another tab.");
        }
      });
    }
  }
});

// Initialize currentTabId with the active tab when the extension is first loaded
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs.length > 0) {
    currentTabId = tabs[0].id;
  }
});
