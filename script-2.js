let url = ("https://fortnite-api.theapinetwork.com/store/get")

fetch(url)
    .then(response => {
        response.json().then(result => {
            let scope = JSON.stringify(result.scope);
            document.getElementById("scope").textContent  = scope;
        });           
    })

    .catch(error => {
        document.getElementById("target").textContent = error;
    });