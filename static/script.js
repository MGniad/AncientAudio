function hamburgerFunction() {
  const x = document.querySelector(".hamburger");
  const y = document.querySelector(".links");

  x.classList.toggle("change");
  y.classList.toggle("visible");
}

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    dots: ".dots",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider2"), {
    slidesToShow: 1,
    dots: ".dots2",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider3"), {
    slidesToShow: 1,
    dots: ".dots3",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider4"), {
    slidesToShow: 1,
    dots: ".dots4",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider5"), {
    slidesToShow: 1,
    dots: ".dots5",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider6"), {
    slidesToShow: 1,
    dots: ".dots6",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
