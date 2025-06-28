var row = document.querySelector(".row");
var myReq = new XMLHttpRequest();
var data = [];

var myNewDom = new DOMParser();

myReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

myReq.send();

myReq.responseType = "json";

myReq.addEventListener("readystatechange", function () {
  if (myReq.readyState == 4) {
    console.log(myReq.response);
    data = myReq.response;
    displayRequest();
  }
});

function displayRequest() {
  var cartona = ``;

  for (var i = 0; i < data.length; i++) {
    cartona += `<div class="col-12 p-2">
          <div class="post p-3 text-bg-dark rounded-3 ">
            <h1 class="fw-bold my-2 fs-4">Title: ${data[i].title
              .split(" ", 5)
              .join(" ")} </h1>
            <p class="lead">Body: ${data[i].body.split(" ", 10).join(" ")}</p>
          </div>
        </div>`;
  }

  var result = myNewDom.parseFromString(cartona, "text/html");
  appendOnRow(result.querySelector("body").children);
  //row.innerHTML = cartona;
}

function appendOnRow(colElements) {
  for (var i = 0; i < colElements.length; i++) {
    row.append(colElements[i]);
  }
}
