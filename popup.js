var btn = document.getElementById("genid");

btn.addEventListener("click", function(){
    document.write("you clicked");    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
  });
});