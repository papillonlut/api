let url = ("https://fortnite-api.com/v2/shop/br")

fetch(url)
    .then(response => {
        response.json().then(result => {
            let date = JSON.stringify(result.data.date);
            document.getElementById("date").textContent  =date;
        });           
    })

    .catch(error => {
        document.getElementById("target").textContent = error;
    });