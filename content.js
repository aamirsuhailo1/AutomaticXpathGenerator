chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "start") {

      start();
    }
  }
);

function start() {
  
  var allElements = ["input","select","button"];

  for (j = 0; j < allElements.length; j++) {
      var tagnam = allElements[j];
      var elements = document.getElementsByTagName(tagnam);
      var len = elements.length;
      console.log(len);
      if (tagnam == "input") {
          console.log("inside input");
          for (i = 0; i < len; i++) {
              var nam;
  
              if (elements[i].getAttribute("type") != "hidden") {
                  if (elements[i].getAttribute("style") == null) {
                      fetchXpaths(tagnam, elements[i]);
                  } else if (elements[i].getAttribute("style") != null) {
                      if (!elements[i].getAttribute("style").includes("display")) {
                          fetchXpaths(tagnam, elements[i]);
                      }
                  }
              }
          }
  
  
      }
      else if (tagnam == "select") {
          console.log("inside select");
          for (k = 0; k < len; k++) {
              fetchXpaths(tagnam, elements[k]);
          }
      }
  
      /*else if (tagnam == "button") {
          console.log("inside button");
          for (l = 0; l < len; l++) {
              fetchXpaths(tagnam, elements[l]);
          }
      }*/
  }
  
  function fetchXpaths(tagnam, element) {
      if (element.hasAttribute("id")) {
          element_getById(tagnam, element);
      } else if (element.hasAttribute("name")) {
          element_getByname(tagnam, element);
  
      } else if (element.hasAttribute("formcontrolname")) {
          element_getByformcontrolname(tagnam, element);
  
      } else if (element.hasAttribute("placeholder")) {
          element_getByplaceholder(tagnam, element);
  
      } else if (element.hasAttribute("value")) {
          element_getByvalue(tagnam, element);
  
      } else if (element.hasAttribute("role")) {
          element_getByrole(tagnam, element);
  
      } else if (element.hasAttribute("class")) {
          element_getByclass(tagnam, element);
  
      }
  }
}
  function element_getById(elementtype, elemt) {
      id = elemt.getAttribute("id");
      var xpat = "//" + elementtype + "[@id=\"" + id + "\"]";
      console.log(xpat);
      var el = "<table><tr><td style='border:1px dotted';color:red;><span style='color:green'>" + xpat + "</span></td></tr></table>";
      elemt.insertAdjacentHTML("afterend", el );
  }
  
  function element_getByname(elementtype, elemt) {
      nam = elemt.getAttribute("name");
      var xpat = "//" + elementtype + "[@name=\"" + nam + "\"]";
      console.log(xpat);
       var el = "<table><tr><td style='border:1px dotted';color:red;><span style='color:green'>" + xpat + "</span></td></tr</table>";
      elemt.insertAdjacentHTML("afterend", el );
  }
  
  function element_getByformcontrolname(elementtype, elemt) {
      fnam = elemt.getAttribute("formcontrolname");
      var xpat = "//" + elementtype + "[@formcontrolname=\"" + fnam + "\"]";
      console.log(xpat);
        var el = "<table><tr><td style='border:1px dotted';color:red;><span style='color:green'>" + xpat + "</span></td></tr></table>";
      elemt.insertAdjacentHTML("afterend", el );
  }
  
  function element_getByvalue(elementtype, elemt) {
      val = elemt.getAttribute("value");
      var xpat = "//" + elementtype + "[@value=\"" + val + "\"]";
      console.log(xpat);
        var el = "<table><tr><td style='border:1px dotted';color:red;><span style='color:green'>" + xpat + "</span></td></tr></table>";
      elemt.insertAdjacentHTML("afterend", el );
  }
  
  function element_getByrole(elementtype, elemt) {
      rol = elemt.getAttribute("role");
      var xpat = "//" + elementtype + "[@role=\"" + rol + "\"]";
      console.log(xpat);
       var el = "<table><tr><td style='border:1px dotted';color:red;><span style='color:green'>" + xpat + "</span></td></tr></table>";
      elemt.insertAdjacentHTML("afterend", el );
  }
  
  function element_getByplaceholder(elementtype, elemt) {
      ph = elemt.getAttribute("placeholder");
      var xpat = "//" + elementtype + "[@placeholder=\"" + ph + "\"]";
      console.log(xpat);
        var el = "<table><tr><td style='border:1px dotted';color:red;><span style='color:green'>" + xpat + "</span></td></tr></table>";
      elemt.insertAdjacentHTML("afterend", el );
  }
  
  function element_getByclass(elementtype, elemt) {
      cls = elemt.getAttribute("class");
      var xpat = "//" + elementtype + "[@class=\"" + cls + "\"]";
      console.log(xpat);
        var el = "<table><tr><td style='border:1px dotted';color:red;><span style='color:green'>" + xpat + "</span></td></tr></table>";
      elemt.insertAdjacentHTML("afterend", el );
  }

