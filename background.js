// background script
// sends the message that sets off the content script
// that makes it cyrylized


console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
      txt: "cyrylize!"
  }
    console.log(msg);
    chrome.tabs.sendMessage(tab.id, msg);
}
