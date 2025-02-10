picSlider = document.getElementsByClassName("picSlider");

document.querySelectorAll(".sliderDot").forEach(dot => {
  dot.addEventListener("click", () => {
    document.querySelectorAll(".sliderDot").forEach(d => d.classList.remove("activePic"));
    dot.classList.add("activePic");
  });
});