document.getElementById('startFollow').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Send a message to the active tab
        chrome.tabs.sendMessage(tabs[0].id, {action: "followButtonClick"});
    });
});
