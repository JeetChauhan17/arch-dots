chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
      if (tab.url.includes("youtube.com/watch")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: playVideoWithDelay
        });
      }
    });
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes("youtube.com/watch")) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: addTabSwitchListeners
      });
    }
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "tab_switched_away") {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        function: pauseVideo
      });
    }
  });
  
  function playVideoWithDelay() {
    setTimeout(() => {
      const video = document.querySelector("video");
      if (video) video.play();
    }, 500);
  }
  
  function pauseVideo() {
    const video = document.querySelector("video");
    if (video) video.pause();
  }
  