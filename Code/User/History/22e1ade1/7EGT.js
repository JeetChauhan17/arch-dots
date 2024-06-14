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
        // chrome.runtime.sendMessage({ message: "tab_switched_away" });
      }
    }
  
    if (typeof document.addEventListener === "undefined" || hidden === undefined) {
      console.log("This browser does not support the Page Visibility API.");
    } else {
      document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }
  }
  
  addTabSwitchListeners();
  