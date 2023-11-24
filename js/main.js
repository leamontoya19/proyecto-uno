/*document.querySelectorAll(".carousel").forEach(carousel=>{
   const buttons = carousel.querySelectorAll("carouselButton");
   console.log(buttons);
   const buttonsHtml = Array.from(Image, () => {
      return '<li class="slide"></li>';
   });
   console.log(buttonsHtml);
});*/




const buttons = document.querySelectorAll("[dataCarouselButton]");
console.log(buttons);

buttons.forEach(button => {
   button.addEventListener ("click", () =>{
    const offset = button.dataset.carroselButton === "next" ? 1: -1; //El signo de interrogación se utiliza para implementar una expresión condicional conocida como operador ternario. En este caso, la expresión evalúa si el valor de la propiedad "dataset.carroselButton" del botón es igual a "next". Si es así, se asigna el valor de 1 a la constante "offset";
    const slides = button
    .closest ("[dataCarousel]")
    .querySelector ("[dataSlides]")

    const activeSlide = slides.querySelector( "[dataActive]")
    console.log(activeSlide);
    //to make sure that it's going to be a continuous loop of images
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    console.log(activeSlide);

   });
  
});

//----Validar email-----
/*
function validationEmail(correo){
   let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
   let validEmail = expReg.test(correo);


   if(validEmail==true){   
   }else{
       alert("This email is invalid")
   }

}*/


