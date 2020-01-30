
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
        var token = creds.token;
        
        $.ajax({
            data: {
                "token": token,
                "channel": "#bot", 
                "text":"Mail : " + $("#courrielC").val() + " : " + $("#messageC").val(),
            },
            dataType: 'text',
            type: 'POST',
            url: "https://slack.com/api/chat.postMessage",
            error: function (error) {
                
                console.log("error: " + error);
            },
            success: function (data) {
                console.log("result: " + data);
            }
        });
        
        


    } 
}
