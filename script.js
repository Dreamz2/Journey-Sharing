const NY_token = config.NYTIME_TOKEN;
const GOOGLE_TOKEN = config.GOOGLE_TOKEN;
const data = genres;

let BestSellers_Content = document.getElementById(`BestSellers_Content`);

async function fillPageInitial(NY_url) {
    // var BestSellers = document.querySelector("#BestSellers_Content");
    // var message = '<p>Hello</p>';

    // document.querySelector("#BestSellers_Content").innerHTML += message;

    //var BestSellers = await BestSellers_data(NY_url);
    // var test =;
    // var LastGenre = await LastGenre();
    // var Fiction = await Fiction();
    // var nonFiction = await nonFiciton();

    //console.log(BestSellers);
    console.log(data);
    console.log(data.Genres.Popular_Genres.Fiction.Test);
    
    // let displayed = 0;
    // while(displayed!=5){
    //     buildBestSellers(BestSellers, displayed);
    //     displayed++;
    // }
}
//fillPageInitial('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key='+ NY_token);
fillPageInitial(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${NY_token}`);

async function BestSellers_data(NY_url) {
    var response = await fetch(NY_url);
        // .then(response => {
        //     if(!response.ok){
        //         throw new Error('Error');
        //     }
        //     return response.blob;
        // });


    return await response.json();
}

function buildBestSellers(data, current){
    BestSellers_Content = `<div class="Book_Title_Author">
                                <div class="Book_Cover">
                                    <img src="${data.results.lists[current].books[current].book_image}" 
                                    alt="${data.results.lists[current].books[current].description}"
                                    width="${data.results.lists[current].books[current].book_image_width}" 
                                    height="${data.results.lists[current].books[current].book_image_height}">
                                </div>
                                <p id="Book_Title">${data.results.lists[current].books[current].title}</p>
                                <p id="Book_Author">${data.results.lists[current].books[current].author}</p>
                            </div>`;

    document.querySelector("#BestSellers_Content").innerHTML += BestSellers_Content;
}