document.getElementById("begin").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "openForm" });
});
