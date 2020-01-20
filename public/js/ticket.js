let formValid = document.getElementById("submit");

formValid.addEventListener('click', validateAll); 
  
function validateAll(event) {
   validate(nom, nomValid, let formValid = document.getElementById("submit");

formValid.addEventListener('click', validateAll); 
  
function validateAll(event) {
   validate(nom, nomValid, okNom, event);  
   validate(prenom, prenomValid, okPrenom, event);
   validate(mobile, regexTel, okMobile, event);
   validate(mail, regexMail, okMail, event);
   validate(adresse, regexAdresse, okAdresse , event);
   validate(texta, regexTexta, okText, event);
   
  
}; 

function validate(val, validVal, wrapper, event) {
    if (val.validity.valueMissing) { 
        event.preventDefault(); 
        wrapper.src = "public/pictos/error.png"; 
 
    } else if (validVal.test(val.value) == false) { 
        event.preventDefault(); 
        wrapper.src = "public/pictos/wrong.png"; 
 
    } else { 
        wrapper.src = "public/pictos/ok.png"; 
    } 
}, event);  
   validate(prenom, prenomValid, ok1, event);
   validate(mobile, regexTel, ok2, event);
   validate(mail, regexMail, ok3, event);
   validate(adresse, regexAdresse, ok4, event);
   validate(texta, regexTexta, ok5, event);
   
  
}; 

function validate(val, validVal, wrapper, event) {
    if (val.validity.valueMissing) { 
        event.preventDefault(); 
        wrapper.src = "public/pictos/error.png"; 
 
    } else if (validVal.test(val.value) == false) { 
        event.preventDefault(); 
        wrapper.src = "public/pictos/wrong.png"; 
 
    } else { 
        wrapper.src = "public/pictos/ok.png"; 
    } 
}