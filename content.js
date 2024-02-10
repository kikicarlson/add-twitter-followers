function clickFollowButtons() {
    const followButtons = document.querySelectorAll('div[data-testid="UserCell"] div[role="button"][aria-label*="Follow"]');
  
    function clickButton(index) {
      if (index >= followButtons.length) return;
      followButtons[index].click();
      console.log(`Clicked follow button ${index + 1} of ${followButtons.length}`);
  
      // Random sleep between clicks
      setTimeout(() => clickButton(index + 1), Math.random() * 5000 + 2000); // Sleep between 2s and 7s
    }
  
    clickButton(0);
  }
  
  // Execute when content script loads to auto-start the process or based on some other trigger
  clickFollowButtons();
  