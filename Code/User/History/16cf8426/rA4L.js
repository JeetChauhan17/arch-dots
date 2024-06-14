chrome.runtime.onInstalled.addListener((tab)=>{
    // console.log("extention installed");


    let ytopwn = false;

    for(tab of tabs){
        if(tab.url && tab.url.includes("youtube.com"))
    }
})