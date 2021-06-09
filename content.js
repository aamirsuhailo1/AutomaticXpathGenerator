chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "start") {

      start();
    }
  }
);

function start() {
  alert("started");

  /* This will get the xpaths for elements with tag as input */
  var elements = document.getElementsByTagName("input");
  var len = elements.length;
  console.log(len);

  for (i = 0; i < elements.length; i++) {
    var nam;

    if (elements[i].getAttribute("type") != "hidden") {

      if (elements[i].getAttribute("style") == null) {
        if (elements[i].hasAttribute("id")) {
          input_getById();
        }
        else if (elements[i].hasAttribute("name")) {
          input_getByname();

        }
        else if (elements[i].hasAttribute("placeholder")) {
          input_getByplaceholder();

        }
      }
      else if (elements[i].getAttribute("style") != null) {
        if (!elements[i].getAttribute("style").includes("display")) {

          if (elements[i].hasAttribute("id")) {
            input_getById();
          }

          else if (elements[i].hasAttribute("name")) {
            input_getByname();
          }
          else if (elements[i].hasAttribute("placeholder")) {
            input_getByplaceholder();

          }
        }
      }
    }
  }



  alert("ended");
}

function input_getById() {
  id = elements[i].getAttribute("id");
  var xpat = "//input[@id=\"" + id + "\"]";
  console.log(xpat);
  elements[i].insertAdjacentHTML("afterend", xpat);
}

function input_getByname() {
  nam = elements[i].getAttribute("name");
  var xpat = "//input[@name=\"" + nam + "\"]";
  console.log(xpat);
  elements[i].insertAdjacentHTML("afterend", xpat);
}

function input_getByplaceholder() {
  ph = elements[i].getAttribute("placeholder");
  var xpat = "//input[@placeholder=\"" + ph + "\"]";
  console.log(xpat);
  elements[i].insertAdjacentHTML("afterend", xpat);
}

