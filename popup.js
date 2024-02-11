document.getElementById('startFollow').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: clickFollowButtons,
      });
    });
  });

  async function clickFollowButtons() {
    const followButtons = document.querySelectorAll('div[data-testid="UserCell"] div[role="button"][aria-label*="Follow"]');
    
    for (let elem of followButtons.slice(0,10)){
        if (elem.innerText== "Follow"){
            await setTimeout(() => {elem.click();}, Math.random() * 10000 + 2000); // Sleep between 2s and 7s
        }
    } 
}