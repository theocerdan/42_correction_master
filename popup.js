document.addEventListener('DOMContentLoaded', function() {
    let active_btn = document.getElementById("active-btn");
    let active;
    chrome.storage.sync.get('active', function(data) {
        console.log('by default value is set to ' + data.active);
        if (data.active == undefined)
            active = false;
        else 
            active = data.active;
    });

    active_btn.addEventListener("click", async () => {
        
        active = !active;
        if (active)
            active_btn.innerHTML = "Correction Master enabled";
        else
            active_btn.innerHTML = "Correction Master disabled";
        chrome.storage.sync.set({'active': active}, function() {
            console.log('Value is set to ' + active);
        });
    });
});