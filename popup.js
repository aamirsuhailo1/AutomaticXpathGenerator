var btn = document.getElementById("genid");

btn.addEventListener("click", function(){   
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
    document.write("<h2 style='color:green';>Great !! Now copy the xpaths from the page and enjoy.</h4>");
  });
});