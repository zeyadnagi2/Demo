// var row = document.querySelector(".row");
// var myReq = new XMLHttpRequest();
// var data = [];

// var myNewDom = new DOMParser();

// myReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

// myReq.send();

// myReq.responseType = "json";

// myReq.addEventListener("load", function () {
//   if (myReq.status == 200) {
//     data = myReq.response;
//     displayRequest();
//   }
// });

// myReq.addEventListener("error", function () {
//   window.alert("error");
//   displayRequest();
// });

// // myReq.addEventListener("readystatechange", function () {
// //   if (myReq.readyState == 4 && myReq.status == 200) {
// //     console.log(myReq.response);
// //     data = myReq.response;
// //     displayRequest();
// //   }
// // });

// function displayRequest() {
//   var cartona = ``;

//   for (var i = 0; i < data.length; i++) {
//     cartona += `<div class="col-12 p-2">
//           <div class="post p-3 text-bg-dark rounded-3 ">
//             <h1 class="fw-bold my-2 fs-4">Title: ${data[i].title
//               .split(" ", 5)
//               .join(" ")} </h1>
//             <p class="lead">Body: ${data[i].body.split(" ", 10).join(" ")}</p>
//           </div>
//         </div>`;
//   }

//   var result = myNewDom.parseFromString(cartona, "text/html");
//   appendOnRow(result.querySelector("body").children);
//   //row.innerHTML = cartona;
// }

// function appendOnRow(colElements) {
//   for (var i = 0; i < colElements.length; i++) {
//     row.append(colElements[i]);
//   }
// }

// function getLemon(afterDone) {
//   return new Promise(function (resolve, reject) {
//     var myReq = new XMLHttpRequest();
//     myReq.open("GET", "https://forkify-api.herokuapp.com/api/search?q=lemon");
//     myReq.send();
//     myReq.responseType = "json";

//     myReq.addEventListener("load", function () {
//       console.log("lemon", myReq.response);
//       resolve();
//     });
//     myReq.addEventListener("error", function () {
//       reject();
//     });
//   });
// }

// function getPizza(afterDone) {
//   return new Promise(function (resolve, reject) {
//     var myReq = new XMLHttpRequest();
//     myReq.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza");
//     myReq.send();
//     myReq.responseType = "json";

//     myReq.addEventListener("load", function () {
//       console.log("pizza", myReq.response);
//       resolve();
//     });
//     myReq.addEventListener("error", function () {
//       reject();
//     });
//   });
// }

// function getPasta() {
//   var myReq = new XMLHttpRequest();
//   myReq.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pasta");
//   myReq.send();
//   myReq.responseType = "json";

//   myReq.addEventListener("load", function () {
//     console.log("pasta", myReq.response);
//   });
//   myReq.addEventListener("error", function () {
//     console.log("error in pasta");
//   });
// }

// getLemon()
//   .then(function () {
//     getPizza()
//       .then(getPasta)
//       .catch(function () {
//         console.log("error in pizza");
//       });
//   })
//   .catch(function () {
//     console.log("error in lemon");
//   });

async function getFood() {
  try {
    var myReq = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=pizza",
      { method: "GET" }
    );
    var res = await myReq.json();
    console.log("pizza", res);

    var myReq2 = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=lemon",
      { method: "GET" }
    );
    var res2 = await myReq.json();
    console.log("pizza", res2);
  } catch {
    console.log("error");
  }
}

getFood();
