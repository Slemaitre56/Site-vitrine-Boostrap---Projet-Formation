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
