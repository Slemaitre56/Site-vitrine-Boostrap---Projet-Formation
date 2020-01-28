let zipcode = document.getElementById("adresseC");
let search = document.getElementById("search");
let listAdresse = document.querySelectorAll("ul#search > li");


zipcode.addEventListener("keyup", function () {
    let code = zipcode.value;
    search.innerHTML = "";
    fetch("https://api-adresse.data.gouv.fr/search/?q=" + code)
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(function (json) {
            json.features.forEach(function (feature) {
                    let label = document.createElement("li");
                    label.innerText = feature.properties.label;
                    search.appendChild(label)

                })

        })
       
})
zipcode.addEventListener("blur", function () {
    search.style.display = "none";    
})
search.addEventListener("click", function (e){
      
   console.log(listAdress);  
})