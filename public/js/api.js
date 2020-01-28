let zipcode = document.getElementById("adresseC");
let search = document.getElementById("search");

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
            json
                .features
                .forEach(function (feature) {
                    let label = document.createElement("li");
                    label.innerText = feature.properties.label;

                    search.appendChild(label)
                    label.addEventListener("click", function () {
                        zipcode.value = label.textContent;
                        search.innerHTML = "";
                    });

                })

        })

})
