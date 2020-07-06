// final regex
let modName = document.getElementById("mod");
let namemod = document.getElementById("nomM");
let okNom = document.getElementById("validNom");
let nom = document.getElementById("nomC");
let nameValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let modSurname = document.getElementById("mod1");
let prenommod = document.getElementById("prenomM");
let okPrenom = document.getElementById("validPrenom");
let prenom = document.getElementById("prenomC");
let prenomValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let modMail = document.getElementById("mod2");
let mailM = document.getElementById("mailM");
let okMail = document.getElementById("validMail");
let mail = document.getElementById("courrielC");
let regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.com|\.fr$/;

let modPassword = document.getElementById("mod3");
let passwordM = document.getElementById("pwdM");
let regexPwdM = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})/;

let okMobile = document.getElementById("validMobile");
let mobile = document.getElementById("mobileC");
let regexTel = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

let okText = document.getElementById("validText");
let texta = document.getElementById("messageC");
let regexTexta = /^[a-zA-Z0-9._-]{3,}/;

let okAdresse = document.getElementById("validAdresse");
let adresse = document.getElementById("adresseC");
let regexAdresse = /^([0-9A-Za-z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-]{1,50})$/;


// modal




function valModalAll(event) {
    valid(namemod, nameValid, modName, event);  
    valid(prenommod, prenomValid, modSurname, event);
    valid(mailM , regexMail, modMail, event);
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

// contact

let formValid = document.getElementById("submit");
formValid.addEventListener('click', validateAll); 
  
function validateAll(event) {
    validate(nom, nameValid, okNom, event);  
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

