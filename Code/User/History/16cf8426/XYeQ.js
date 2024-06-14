chrome.tabs.onActivated.addListener((tab)=>{
    // console.log("extention installed");


    let ytopen = false;

    for(tab of tabs){
        if(tab.url && tab.url.includes("youtube.com")){
            ytopen = true
            break
        }
    }


    if(ytopen){

    }
})