const NY_token = config.NYTIME_TOKEN;
const GOOGLE_TOKEN = config.GOOGLE_TOKEN;

async function fillPageInitial(NY_url) {
    // var BestSellers = document.querySelector("#BestSellers_Content");
    // var message = '<p>Hello</p>';

    // document.querySelector("#BestSellers_Content").innerHTML += message;

    var BestSellers = await BestSellers_data(NY_url);
    var LastGenre = await LastGenre();
    var Fiction = await Fiction();
    var nonFiction = await nonFiciton();

    console.log(BestSellers);
    console.log(BestSellers.results.books[0]);
    
    
}
fillPageInitial('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key='+ NY_token);

async function BestSellers_data(NY_url) {
    var response = await fetch(NY_url)

    return await response.json();
}