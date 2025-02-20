// document.querySelectorAll(".sliderDot").forEach((dot) => {
//   dot.addEventListener("click", () => {
//     document
//       .querySelectorAll(".sliderDot")
//       .forEach((d) => d.classList.remove("activePic"));
//     dot.classList.add("activePic");
//   });
// });

beforePic = document.querySelector("#beforePic");
afterPic = document.querySelector("#afterPic");

beforePicArray = [
  "./images/b4Mattress.jpg",
  "./images/b4Pallets.jpg",
  "./images/b4Rocks.jpg",
  "./images/b4Tree.jpg",
  "./images/b4Yard.jpg",
];
afterPicArray = [
  "./images/aftMattress.jpg",
  "./images/aftPallets.jpg",
  "./images/aftRocks.jpg",
  "./images/aftTree.jpg",
  "./images/aftYard.jpg",
];

let picIndex = 0;

// Function to change images with a fade effect
displayedPictures = () => {
  beforePic.style.opacity = ".3";
  afterPic.style.opacity = ".3";

  setTimeout(() => {
    beforePic.src = beforePicArray[picIndex];
    afterPic.src = afterPicArray[picIndex];

    beforePic.style.opacity = "1";
    afterPic.style.opacity = "1";

    picIndex++;
    if (picIndex >= beforePicArray.length || picIndex >= afterPicArray.length) {
      picIndex = 0;
    }

    setTimeout(displayedPictures, 4000);
  }, 400); // Adjust timing to match the CSS transition duration
};

displayedPictures();
