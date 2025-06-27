Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
}); //No hoisting

const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const slideBlock = document.querySelector(".slide_block");
const carTitle = document.querySelector(".carName");
const updateTitle = () => {
  carTitle.textContent = currCar.capitalize();
};
let currCar = "blue";

function nextCar() {
  if (currCar === "blue") {
    slideBlock.style.transform = `translateX(-500px)`;
    [
      currCar,
      carTitle.style.color,
      nextBtn.style.backgroundColor,
      prevBtn.style.backgroundColor,
    ] = ["red", "red", "purple", "blue"];
    updateTitle();
  } else if (currCar === "red") {
    slideBlock.style.transform = `translateX(500px)`;
    [
      currCar,
      carTitle.style.color,
      nextBtn.style.backgroundColor,
      prevBtn.style.backgroundColor,
    ] = ["purple", "purple", "blue", "red"];
    updateTitle();
  } else {
    slideBlock.style.transform = `translateX(0px)`;
    [
      currCar,
      carTitle.style.color,
      nextBtn.style.backgroundColor,
      prevBtn.style.backgroundColor,
    ] = ["blue", "blue", "red", "purple"];
    updateTitle();
  }
}

function prevCar() {
  if (currCar === "blue") {
    slideBlock.style.transform = `translateX(500px)`;
    [
      currCar,
      carTitle.style.color,
      nextBtn.style.backgroundColor,
      prevBtn.style.backgroundColor,
    ] = ["purple", "purple", "blue", "red"];
    updateTitle();
  } else if (currCar === "purple") {
    slideBlock.style.transform = `translateX(-500px)`;
    [
      currCar,
      carTitle.style.color,
      nextBtn.style.backgroundColor,
      prevBtn.style.backgroundColor,
    ] = ["red", "red", "purple", "blue"];
    updateTitle();
  } else {
    slideBlock.style.transform = `translateX(0px)`;
    [
      currCar,
      carTitle.style.color,
      nextBtn.style.backgroundColor,
      prevBtn.style.backgroundColor,
    ] = ["blue", "blue", "red", "purple"];
    updateTitle();
  }
}

nextBtn.addEventListener("click", nextCar);
prevBtn.addEventListener("click", prevCar);

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) {
    nextCar();
  } else if (event.keyCode === 37) {
    prevCar();
  }
});
