function looping() {
    chrome.storage.sync.get('active', function(data) {
        if (data.active == true){
            var listing = document.querySelectorAll(".fc-content");
            console.log(listing);
            if (listing.length > 0)
            {
                chrome.storage.sync.set({'active': false}, function() {
                    console.log('Listing found ! ' + false);
                    chrome.runtime.sendMessage({type: "updateBtn"});
                });
            } else {
                document.location.reload();
            }
        }
    });
    setTimeout(looping, 3000);
 }
 setTimeout(looping, 3000);