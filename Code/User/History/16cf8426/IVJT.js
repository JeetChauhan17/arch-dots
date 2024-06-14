// chrome.tabs.onActivated.addListener((activeInfo)=>{
//     // console.log("extention installed");


//     let ytopen = false;

//     for(tab of tabs){
//         if(tab.url && tab.url.includes("youtube.com")){
//             ytopen = true
//             break
//         }
//     }


//     if(ytopen){

//     }
// })


// chrome.tabs.onActivated.addListener((activeInfo)=>{

//     chrome.tab.get(activeInfo.tabId, (tab)=>{
//         if(tab.url.includes("youtube.com")) {

//         }
//     })

// })



let currTabId = null;

function isYt(url){
    return url.includes("youtube.com")
}

chrome.tabs.onActivated.addListener((activeInfo)=>{
    chrome.tab.get((activeInfo.tabId, (tab)=>{
        if(currTabId != null){
            chrome.tabs.get(currTabId, currTabId)=>{
                if(isYt(cur))
            }
        }
    }))
})



























