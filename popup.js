// const btn = document.getElementById("modalBtn");

// const popShow = document.getElementById("thisModal");

// const closePop = document.querySelector(".close");






// // Get all the buttons you want to target
// const buttons = document.querySelectorAll('.my-button');

// // Add the same event listener to each button
// buttons.forEach(button => {
//   btn.addEventListener('click', () => {
//     popShow.classList.toggle("active");
//     console.log('Button clicked!'); 
//   });
// });
const btn = document.getElementById("modalBtn");

const popShow = document.getElementById("thisModal");

const closePop = document.querySelector(".close");

btn.addEventListener("click", function () {
  popShow.classList.add("active");
});

closePop.addEventListener("click", function () {
  popShow.classList.remove("active");
});
