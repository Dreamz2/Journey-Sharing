const NY_token = config.NYTIME_TOKEN;
const GOOGLE_TOKEN = config.GOOGLE_TOKEN;

function fillPageInitial() {
    let BestSellers = document.querySelector("#BestSellers_Content");
    let message = '<p>Hello</p>';

    document.querySelector("#BestSellers_Content").innerHTML += message;

    const data1 = fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key='+ NY_token)
        .then(response => response.json())
        .then(data => console.log(data));

    
    
}
fillPageInitial();