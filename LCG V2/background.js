chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openForm") {
    chrome.tabs.create({ url: "https://docs.google.com/forms/d/1qLBMhoKNG31PbdvakzINwqIGQMrZpjUzAPq4SwFEPdk/edit" });
  }
});
