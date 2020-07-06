


//si l'utilisateur accepte
document.getElementById("agree").addEventListener("click", hideCookiebar);
function hideCookiebar() {
  // je cache ma barre
  document.getElementById("cookie-bar").style.display = 'none';
  // si oui je stocke dans cookieAgree
  sessionStorage.setItem("cookieAgree", "true")
};
if(sessionStorage.getItem("cookieAgree") == "true"){
  // si oui ete si elle est stokér donc display none
  document.getElementById("cookie-bar").style.display = 'none';
}
//si l'utilisateur refuse
document.getElementById("stop-cookie").addEventListener("click", redirection);
function redirection() {
  
  document.location.href="https://www.google.com/"
  
};




