async function clickFollowButtons() {
    const followButtons = document.querySelectorAll('div[data-testid="UserCell"] div[role="button"][aria-label*="Follow"]');
    let newFollowButtons= []
    for (let elem of followButtons){
        if (elem.innerText== "Follow"){
            elem.click();
            await setTimeout(() => {}, Math.random() * 200 + 2000); // Sleep between 2s and 7s
        }
    } 
}



  
  // Execute when content script loads to auto-start the process or based on some other trigger
  clickFollowButtons();
  