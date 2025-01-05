console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const classValue = document.querySelector(".value");
console.log(classValue);

const buttonElement = document.querySelector("button");
console.log(buttonElement);

const statDiv = document.querySelector(".stat > div");
console.log(statDiv);

const classHello = document.querySelector(".hello");
console.log(classHello);

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);


// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}

console.log("Ratings exercise results:")
const ratingsList = document.querySelectorAll(".rating-display div");

for (let ratings of ratingsList.values()){
console.log(ratings);
}

console.log(ratingsList);


console.log("areas list");

const areaList = document.querySelectorAll(".area-display div");

for(let i = 0; i < areaList.length; i++){
    let areas = areaList[i];
    console.log(areas);
}

console.log("Park descriptions exercise")

const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    //console.log(content);
  }

  for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }
  desc.innerHTML = content;
  console.log(content);
}

console.log("Rating values exercise");

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings){
let ratingValue = parseFloat(rating.innerText);
console.log(ratingValue);
if (ratingValue > 4.7){
    rating.classList.add("high-rating");
    rating.classList.remove("value");
}
}

console.log("Parks counter in banner")

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");

console.log("Event listner/handler lesson");

const firstBtn = document.querySelector(".rate-button");
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });
  firstBtn.addEventListener("click", (event) => {
    console.log(event.target);
  });

  // Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target);
  });
});

allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.target.parentNode);
    });
  });

  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });

  // Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
//nameSorter.addEventListener("click", (event) => {
//    event.preventDefault();
//    console.log("You clicked the name sorter");
//  });

  nameSorter.addEventListener("click", (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";
  
  // 4. Create an array
const parksArray = Array.from(parksList);

// 5. Sort the array
parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

   // 6. Insert each park into the DOM
   parksArray.forEach((park) => {
    main.appendChild(park);
  });

});


  // Creating the sort-by-rating functionality
  const ratingSorter = document.querySelector("#rating-sorter");
 
//Add an event listener
 ratingSorter.addEventListener("click", (event) => {
 event.preventDefault();
 
// 1. Get the main element
const main = document.querySelector("main");

// 2. Get the list of parks
const parksList = main.querySelectorAll(".park-display");

// 3. Empty the main element
main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);
  
  // 5. Sort the array
  ratings.sort((parkA, parkB) => {
    const parkARating = parkARating ? parseFloat(parkARating.innerText) : 0;
    const parkBRating = parkBRating ? parseFloat(parkBRating.innerText) : 0;
  
    return parkARating - parkBRating;
   
  });

// 6. Insert each park into the DOM
parksArray.forEach((park) => {
    main.appendChild(park);
  });



  }
)