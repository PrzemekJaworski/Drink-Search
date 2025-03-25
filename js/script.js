/*
  script.js - DrinkSearch
  Description: Implements real-time filtering of the drink list based on user input.
*/

// Select the search input and list items
const search = document.querySelector(".search");
const li = document.querySelectorAll("li");

// Function to filter the list based on input value
const serchEngine = e => {
  const text = e.target.value.toLowerCase();

  li.forEach(el => {
    if (el.textContent.toLowerCase().indexOf(text) !== -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};

// Listen for keyup event in the search input
search.addEventListener("keyup", serchEngine);
