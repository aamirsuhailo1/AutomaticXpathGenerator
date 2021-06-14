var btn = document.getElementById("genid");

btn.addEventListener("click", function(){   
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
    document.write("<div style='text-align:center; margin-top:100px;'><h2 style='color:green';>Great !! Now copy the xpaths from the page and enjoy.</h4></div>");
  });
});