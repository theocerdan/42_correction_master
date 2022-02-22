function doStuff() {
    chrome.storage.sync.get('active', function(data) {
        if (data.active == true){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
            });
        }
    });
    setTimeout(doStuff, 1000);
 }
 setTimeout(doStuff, 1000);