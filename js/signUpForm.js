//---Validación Formulario--------
/*
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#signUpForm');
    const nombreInput = form.querySelector('input[name="name"]');
    const contraseñaInput = form.querySelector('input[name="password"]');
    const correoInput = form.querySelector('input[name="email"]');
    const submitButton = form.querySelector('.buttonJoinUs');

    form.addEventListener('submit', function(event) {
      if (!/^[A-Z][a-z]+$/.test(nombreInput.value)) {
        nombreInput.setCustomValidity('El nombre debe comenzar con mayúscula y contener solo letras.');
        event.preventDefault();
      } else {
        nombreInput.setCustomValidity('');
      }

      if (!/^(?=.[A-Z])(?=.\d).{4,16}$/.test(contraseñaInput.value)) {
        contraseñaInput.setCustomValidity('La contraseña debe tener entre 4 y 16 caracteres, al menos una mayúscula y un número.');
        event.preventDefault();
      } else {
        contraseñaInput.setCustomValidity('');
      }

      if (!/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
      .test(correoInput.value)) {
        correoInput.setCustomValidity('El correo electrónico debe tener un formato válido.');
        event.preventDefault();
      } else {
        correoInput.setCustomValidity('');
      }
    });

    nombreInput.addEventListener('input', function() {
      nombreInput.setCustomValidity(''); // Limpiar el mensaje de validación al modificar el campo
    });

    contraseñaInput.addEventListener('input', function() {
        contraseñaInput.setCustomValidity(''); // Limpiar el mensaje de validación al modificar el campo
    });

    correoInput.addEventListener('input', function() {
      correoInput.setCustomValidity(''); // Limpiar el mensaje de validación al modificar el campo
    });
  });
*/






































































// const nombre = document.getElementById("name");
// const correo = document.getElementById("email");
// const contrasenia = document.getElementById("password");
// const form = document.getElementById("signUpForm");
// const inputs = document.querySelectorAll(".inputBox");

// form.addEventListener("submit",(e) =>{
//     e.preventDefault(); 
//     let condition = validationForm();
//     /*if (condition){
//     sendForm();
//     }*/
// });


// function validationForm(){
//     let condition = true;
//     inputs.forEach( (element) =>{
//         element.lastElementChild.innerHTML = "";
//     });

//     if(nombre.value.length < 1 || nombre.value.trim()==""){
//         showError("groupName", "Name invalid");
//         condition = false
//     }
    
//     if(correo.value.length < 1 || correo.value.trim()==""){
//         showError("groupEmail", "This email is invalid");
//         condition = false
//     } 
        
//     if(contrasenia.value.length < 1 || contrasenia.value.trim()==""){
//         showError("groupPassword","Password no valid");
//         condition = false
//     };
//     return condition;

// }



// function showError(idInput, message){
//     let element = document.querySelector(`#${idInput}`);
//         element.lastElementChild.innerHTML = message;
// }


// /*
// //para simular que el formulario se envia a una base de datos
// function sendForm(){
//     form.reset;
//     form.lastElementChild.innerHTML = "Submittion sent correctly!";

// }*/





