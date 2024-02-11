document.getElementById('startFollow').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: clickFollowButtons,
        });
    });
});

function clickFollowButtons() {
    const followButtons = [...document.querySelectorAll('div[data-testid="UserCell"] div[role="button"][aria-label*="Follow"]')];

    async function clickButtonWithDelay(button) {
        if (button.innerText === "Follow") {
            // Schedule the click action after a delay
            setTimeout(() => button.click(), Math.random() * 30000 + 2000); // Sleep between 2s and 12s
        }
    }

    followButtons.slice(0, 3).forEach(elem => {
        clickButtonWithDelay(elem);
    });
}
