let modal = document.getElementById("envoyer");

let modName = document.getElementById("mod");
let modSurname = document.getElementById("mod1");
let modMail = document.getElementById("mod2");
let modPassword = document.getElementById("mod3");

let namemod = document.getElementById("nomM");
let nameValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let prenommod = document.getElementById("prenomM");
let prenommodValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let mailM = document.getElementById("mailM");
let regexMailM = /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{2,}(\.fr|\.com)$/;

let passwordM = document.getElementById("pwdM");
let regexPwdM = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})/;

modal.addEventListener('click', valModalAll)


function valModalAll(event) {
    valid(namemod, nameValid, modName, event);  
    valid(prenommod, prenommodValid, modSurname, event);
    valid(mailM , regexMailM, modMail, event);
    valid(passwordM, regexPwdM, modPassword, event);
    
 };


function valid(val, validVal, wrapper, event) {
    if (val.validity.valueMissing) { 
        event.preventDefault(); 
        wrapper.innerHTML="&#xf12a";
 
    } else if (validVal.test(val.value) == false) { 
        event.preventDefault(); 
        wrapper.innerHTML="&#xf00d";

    } else { 
        wrapper.innerHTML="&#xf00c";
    } 
}


let okNom = document.getElementById("validNom");
let okPrenom = document.getElementById("validPrenom");
let okMobile = document.getElementById("validMobile");
let okMail = document.getElementById("validMail");
let okAdresse = document.getElementById("validAdresse");
let okText = document.getElementById("validText");

let nom = document.getElementById("nomC");
let nomValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let prenom = document.getElementById("prenomC");
let prenomValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let mobile = document.getElementById("mobileC");
let regexTel = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

let mail = document.getElementById("courrielC");
let regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.com|\.fr$/;

let adresse = document.getElementById("adresseC");
let regexAdresse = /^([0-9A-Za-z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-]{1,50})$/;

let texta = document.getElementById("messageC");
let regexTexta = /^[a-zA-Z0-9._-]+[a-z0-9._-]{2,}/;



let formValid = document.getElementById("submit");

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
        event.preventDefault();
        wrapper.src = "public/pictos/ok.png"; 

    } 
}

let reset = document.getElementById("reset");
let tabs = document.querySelectorAll(".reset");

reset.addEventListener('click', eraseAll);

function eraseAll() {
    tabs.forEach(function(tab){
        tab.style.display = "none";
    });
      
}

