const redLight = document.querySelector("#red");
const yellowLight = document.querySelector("#yellow");
const greenLight = document.querySelector("#green");
const allLight = document.querySelector("#all");
const altLight = document.querySelector("#alt");
let flag = 1;

redLight.addEventListener("click", (event) => {
  document.querySelector("#rL").style.backgroundColor = "red";
  document.querySelector("#yL").style.backgroundColor = "";
  document.querySelector("#gL").style.backgroundColor = "";
});

yellowLight.addEventListener("click", (event) => {
  document.querySelector("#rL").style.backgroundColor = "";
  document.querySelector("#yL").style.backgroundColor = "yellow";
  document.querySelector("#gL").style.backgroundColor = "";
});

greenLight.addEventListener("click", (event) => {
  document.querySelector("#rL").style.backgroundColor = "";
  document.querySelector("#yL").style.backgroundColor = "";
  document.querySelector("#gL").style.backgroundColor = "green";
});

allLight.addEventListener("click", (event) => {
  if (flag == 1) {
    document.querySelector("#rL").style.backgroundColor = "red";
    document.querySelector("#yL").style.backgroundColor = "yellow";
    document.querySelector("#gL").style.backgroundColor = "green";
    flag = 0;
  } else {
    document.querySelector("#rL").style.backgroundColor = "";
    document.querySelector("#yL").style.backgroundColor = "";
    document.querySelector("#gL").style.backgroundColor = "";
    flag = 1;
  }
});

altLight.addEventListener("click", function() {
    setTimeout(function() {
        document.querySelector("#rL").style.backgroundColor = 'red';
        altLight.style.backgroundColor = 'red';
        document.querySelector("#yL").style.backgroundColor = '';
        document.querySelector("#gL").style.backgroundColor = '';
    }, 0);

    setTimeout(function() {
        document.querySelector("#rL").style.backgroundColor = '';
        document.querySelector("#yL").style.backgroundColor = 'yellow';
        altLight.style.backgroundColor = 'yellow';
        document.querySelector("#gL").style.backgroundColor = '';
    }, 1000);

    setTimeout(function() {
        document.querySelector("#rL").style.backgroundColor = '';
        document.querySelector("#yL").style.backgroundColor = '';
        document.querySelector("#gL").style.backgroundColor = 'green';
        altLight.style.backgroundColor = 'green';
    }, 2000);

    setTimeout(function() {
        document.querySelector("#rL").style.backgroundColor = '';
        document.querySelector("#yL").style.backgroundColor = '';
        document.querySelector("#gL").style.backgroundColor = '';
        altLight.style.backgroundColor = '';
    }, 3000);
});



























// myButton.addEventListener('click', function() {
//     // First self-executing function with a delay of 1000 milliseconds (1 second)
//     setTimeout(function() {
//         console.log('First function executed after 1 second!');
//     }, 1000);

//     // Second self-executing function with a delay of 2000 milliseconds (2 seconds)
//     setTimeout(function() {
//         console.log('Second function executed after 2 seconds!');
//     }, 2000);
// });












// (function () {
//     document.querySelector("#rL").style.backgroundColor = 'red';
//     document.querySelector("#yL").style.backgroundColor = 'yellow';
//     document.querySelector("#gL").style.backgroundColor = 'green';
//  })();







//   (function () {
//       document.querySelector("#rL").style.backgroundColor = 'red';
//       document.querySelector("#yL").style.backgroundColor = 'yellow';
//       document.querySelector("#gL").style.backgroundColor = 'green';
//    })();
//   (setTimeout(() => {
//     document.querySelector("#rL").style.backgroundColor = "red";
//     document.querySelector("#yL").style.backgroundColor = "";
//     document.querySelector("#gL").style.backgroundColor = "";
//   }, 0))();

//   (setTimeout(() => {
//     document.querySelector("#rL").style.backgroundColor = "";
//     document.querySelector("#yL").style.backgroundColor = "yellow";
//     document.querySelector("#gL").style.backgroundColor = "";
//   }, 0))();

//   (setTimeout(() => {
//     document.querySelector("#rL").style.backgroundColor = "";
//     document.querySelector("#yL").style.backgroundColor = "";
//     document.querySelector("#gL").style.backgroundColor = "green";
//   }, 0))();