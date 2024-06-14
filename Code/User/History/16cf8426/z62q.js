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
  
  function addTabSwitchListeners() {
    let hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }
  
    function handleVisibilityChange() {
      if (document[hidden]) {
        chrome.runtime.sendMessage({ message: "tab_switched_away" });
      }
    }
  
    if (typeof document.addEventListener === "undefined" || hidden === undefined) {
      console.log("This browser does not support the Page Visibility API.");
    } else {
      document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }
  }
  