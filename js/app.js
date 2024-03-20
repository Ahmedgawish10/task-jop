document.addEventListener("DOMContentLoaded",()=>{
  //  let dotSelected =document.querySelector(".ol");
    //dotSelected.classList.toggle("active");
    console.log("every thing is okey");
})

  let leftbox =document.querySelector(".left-box");
  let rightbox =document.querySelector(".right-box");
window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset;
    if (scrollY >= 400) {
      console.log('Vertical scroll position is 800 pixels.');
      leftbox.classList.add('animation-show');
      leftbox.classList.remove("animation-hide");

      rightbox.classList.add('animation-show');
      rightbox.classList.remove("animation-hide");

    }  else {
        console.log('Vertical scroll position is 800 pixels.');
        leftbox.classList.remove('animation-show');
        leftbox.classList.add("animation-hide");

        rightbox.classList.remove('animation-show');
        rightbox.classList.add("animation-hide");
  
      }

  });

//   scroll section
let upscroller = document.querySelector(".upscroller");
let scroll = document.getElementById("scroll-up");

scroll.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.onscroll = function asd() {
  if (window.scrollY >= 300) {
    upscroller.classList.add("show");
    upscroller.classList.remove("hide");
  } else {
    upscroller.classList.add("hide");
    upscroller.classList.remove("show");
  }
};
