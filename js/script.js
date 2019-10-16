document.addEventListener("DOMContentLoaded", function() {
  console.log("hello world");
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    wrapAround: true,
    freeScroll: true,
    autoPlay: true
  });
});

//end of doc ready
