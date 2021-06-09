chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "start") {
     
      start();
    }
  }
);

function start() {
  alert("started");
  var elements = document.getElementsByTagName("input");
  var len = elements.length;
  console.log(len);
  
  for(i=0; i<elements.length; i++){
     var nam;
      console.log(elements[i].hasAttribute("id"));
      console.log(elements[i].hasAttribute("type"));
      console.log(elements[i].getAttribute("type"));
       if(elements[i].hasAttribute("id") && elements[i].getAttribute("type")!="hidden" && elements[i].getAttribute("style")==null){
          nam = elements[i].getAttribute("id");
           var xpat = "//input[@id=\""+nam+"\"]";
           console.log(xpat);
            elements[i].insertAdjacentHTML("afterend",xpat);
            
      }
      else if(elements[i].hasAttribute("name") && elements[i].getAttribute("type")!="hidden" && elements[i].getAttribute("style")==null){
          nam = elements[i].getAttribute("name");
           var xpat = "//input[@name=\""+nam+"\"]";
           console.log(xpat);
            elements[i].insertAdjacentHTML("afterend",xpat);
            
      }
      else if (elements[i].getAttribute("style")!=null){
          if(!elements[i].getAttribute("style").includes("display")){
                if(elements[i].hasAttribute("id")){
                       nam = elements[i].getAttribute("id");
                       var xpat = "//input[@id=\""+nam+"\"]";
                       console.log(xpat);
                       elements[i].insertAdjacentHTML("afterend",xpat);
                }
              else if(elements[i].hasAttribute("id")){
                     nam = elements[i].getAttribute("name");
                       var xpat = "//input[@name=\""+nam+"\"]";
                       console.log(xpat);
                        elements[i].insertAdjacentHTML("afterend",xpat);
                }
              }
          }
      }
  
  
      
      
  alert("ended");
}

