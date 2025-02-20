picSlider = document.getElementsByClassName("picSlider");

document.querySelectorAll(".sliderDot").forEach((dot) => {
  dot.addEventListener("click", () => {
    document
      .querySelectorAll(".sliderDot")
      .forEach((d) => d.classList.remove("activePic"));
    dot.classList.add("activePic");
  });
});

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

// changes the compared pictures in the intro section.
let picIndex = 0;
displayedPictures = () => {
  beforePic.src = beforePicArray[picIndex];
  afterPic.src = afterPicArray[picIndex];
  
  picIndex++;
  if (picIndex >= beforePicArray.length || picIndex >= afterPicArray.length) {
    picIndex = 0;
  }
  setTimeout(displayedPictures, 2000);
};
displayedPictures();

console.log(beforePic.src);
console.log(afterPic.src);
