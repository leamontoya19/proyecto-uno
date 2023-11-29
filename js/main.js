/*document.querySelectorAll(".carousel").forEach(carousel=>{
   const buttons = carousel.querySelectorAll("carouselButton");
   console.log(buttons);
   const buttonsHtml = Array.from(Image, () => {
      return '<li class="slide"></li>';
   });
   console.log(buttonsHtml);
});*/




const buttons = document.querySelectorAll("[data_carousel_button]");


buttons.forEach(button => {
   button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1 
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]");/*with this no mattter how many carousels we have they´re going to work well*/ 

    const activeSlide = slides.querySelector("[data-active]");
   
    
    //to make sure that it's going to be a continuous loop of images
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

    console.log(newIndex);


   })
  console.log(buttons);
})



