document.addEventListener('DOMContentLoaded', function() {
    let active_btn = document.getElementById("active-btn");
    let active;

    chrome.storage.sync.get('active', function(data) {
        if (data.active == undefined){
            chrome.storage.sync.set({'active' : false}, function() {
                console.log('Value is set to false by default');
                active = false;
            });
        } else {
            active = data.active;
            console.log('Retrieve data : ' + data.active);
        }
        active_btn.innerHTML = buttonTitle(active);
    });

    active_btn.addEventListener("click", async () => {
        active = !active;
        active_btn.innerHTML = buttonTitle(active);
        chrome.storage.sync.set({'active': active}, function() {
            console.log('Value set to ' + active);
        });
    });
});

function buttonTitle(active){
    return ("Correction Master " + active);
}