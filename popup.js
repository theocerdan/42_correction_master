let active_btn;
let gif;

document.addEventListener('DOMContentLoaded', function() {
    active_btn = document.getElementById("active-btn");
    gif = document.getElementById("gif");
    chrome.storage.sync.get('active', function(data) {
        let newval = data.active;
        if (newval == undefined){
            chrome.storage.sync.set({'active' : false}, function() {
                console.log('Value is set to false by default');
                newval = false;
            });
        } else {
            console.log('Retrieve data : ' + newval);
        }
        active_btn.innerHTML = buttonTitle(newval);
    });

    active_btn.addEventListener("click", async () => {
        chrome.storage.sync.get('active', function(data) {
            let newval = !data.active;
            chrome.storage.sync.set({'active': newval}, function() {
                console.log('Value set to ' + newval);
                active_btn.innerHTML = buttonTitle(newval);
                if (newval == true)
                    gif.style.display = "none";
            });
        });
    });
});

function buttonTitle(active){
    return ("Correction Master " + active);
}

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "updateBtn":
                var audio = new Audio('prout.mp3');
                audio.loop = false;
                audio.play(); 
                console.log("Message receive !");
                chrome.storage.sync.get('active', function(data) {
                    active_btn.innerHTML = buttonTitle(data.active);
                    console.log("accutal active status: " + data.active);
                    gif.style.display = "block";
                });
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);