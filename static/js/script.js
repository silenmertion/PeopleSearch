// Device indetificate

const body = document.querySelector("body");

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  body.classList.add("touch");
} else {
  body.classList.add("pc");
}

// Burger Menu

const burgerWrap = document.querySelector(".burger__wrapper");
const burgLine = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__menu");

burgerWrap.addEventListener("click", function () {
  burgLine.classList.toggle("active");
  headerMenu.classList.toggle("active");
});

// Burger__Drop__menu

const hookheader = document.querySelector(".header__hook");
const bodyClass = body.className;

hookheader.addEventListener("click", () => {
  if (bodyClass == "touch") {
    document.querySelector(".header__sub-menu").classList.toggle("active");
  } else {
    document.querySelector(".header__sub-menu").classList.remove("active");
  }
});

// Audio

const audio = document.querySelector(".audio");
const music__img = document.querySelector(".aside__audio-hook");

music__img.addEventListener("click", () => {
  music__img.classList.toggle("paused");

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

window.onfocus = function () {
  music__img.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};

// Aside Mobile

document.querySelector(".aside").addEventListener("click", () => {
  document.querySelector(".aside").classList.toggle("active");
});

// Theme Check
const lightBtn = document.querySelector(".theme__change");

if (localStorage.getItem("theme") === "light") {
  lightBtn.classList.add("active");
  body.classList.add("light_theme");
}

// Theme Button

lightBtn.addEventListener("click", () => {
  lightBtn.classList.toggle("active");
  const isLight = body.classList.toggle("light_theme");

  if (isLight) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
