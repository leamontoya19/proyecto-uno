/*document.querySelectorAll(".carousel").forEach(carousel=>{
   const buttons = carousel.querySelectorAll("carouselButton");
   console.log(buttons);
   const buttonsHtml = Array.from(Image, () => {
      return '<li class="slide"></li>';
   });
   console.log(buttonsHtml);
});*/




const buttons = document.querySelectorAll("[dataCarouselButton]")


buttons.forEach(button => {
   button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1 
    const slides = button
    .closest("[dataCarousel]")
    .querySelector("[dataSlides]")

    const activeSlide = slides.querySelector("[dataActive]")
    
    //to make sure that it's going to be a continuous loop of images
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active


   })
  
})



