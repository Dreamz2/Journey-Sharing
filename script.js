const NY_token = config.NYTIME_TOKEN;
const GOOGLE_TOKEN = config.GOOGLE_TOKEN;

const Genres = genres.Genres;
const GenresList = genresList[0].Genres;
const Sub_Genres = genresList[1].Sub_Genres;

async function fillPageInitial() {
    // const BestS_URL = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${NY_token}`;
    // const fic_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&printType=books&maxResults=20&key=${GOOGLE_TOKEN}`;
    // const nonfic_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction&orderBy=newest&printType=books&maxResults=20&key=${GOOGLE_TOKEN}`;

    // var BestSellers = await getBestSellers_data(BestS_URL);
    // var RandGenre = await getrandGenre_data();
    // var Fiction = await getFiction_data(fic_URL);
    // var nonFiction = await getnonFiciton_data(nonfic_URL);

    console.log(Genres);
    console.log(GenresList);
    console.log(GenresList[0].Popular_Genres[0].Fiction[6]);

    // console.log(BestSellers);
    // console.log(RandGenre);
    // console.log(Fiction);
    // console.log(nonFiction);
    
    // let displayed = 0;
    // while(displayed!=5){
    //     document.querySelector("#BestSellers_Content").innerHTML += buildBestSellers(BestSellers, displayed);
    //     document.querySelector("#BestSellers_Content").innerHTML += buildBestSellers(BestSellers, displayed);
    //     document.querySelector("#BestSellers_Content").innerHTML += buildBestSellers(BestSellers, displayed);
    //     document.querySelector("#BestSellers_Content").innerHTML += buildBestSellers(BestSellers, displayed);
    //     displayed++;
    // }
}
fillPageInitial();

async function getBestSellers_data(NY_url) {
    var response = await fetch(NY_url);
        // .then(response => {
        //     if(!response.ok){
        //         throw new Error('Error');
        //     }
        //     return response.blob;
        // });


    return await response.json();
}

async function getrandGenre_data() {
    let SubOrGenre = (Math.random()*5) % 2;
    let nonOrPopular = (Math.random()*5) % 2;
    let nonOrFiction = Math.random()*18;
    
    var URL = `https://api.nytimes.com/svc/books/v3/lists.json?list=${Genres[SubOrGenre][nonOrPopular][nonOrFiction]}&api-key=${NY_token}`;

    return genre_data(URL)
}

async function genre_data(URL) {
    var response = await fetch();
    return await response.json();
}

async function getFiction_data(URL) {
    var response = await fetch(URL);
    return await response.json();
}

async function getnonFiciton_data(URL) {
    var response = await fetch(URL);
    return await response.json();
}

function buildBestSellers(data, current){
    return `<div class="Book_Title_Author">
                <div class="Book_Cover">
                    <img src="${data.results.lists[current].books[current].book_image}" 
                    alt="${data.results.lists[current].books[current].description}"
                    width="${data.results.lists[current].books[current].book_image_width}" 
                    height="${data.results.lists[current].books[current].book_image_height}">
                </div>
                <p id="Book_Title">${data.results.lists[current].books[current].title}</p>
                <p id="Book_Author">${data.results.lists[current].books[current].author}</p>
            </div>`;
}
function buildRandGenre(data, current){
    return `<div class="Book_Title_Author">
                <div class="Book_Cover">
                    <img src="${data.results.lists[current].books[current].book_image}" 
                    alt="${data.results.lists[current].books[current].description}"
                    width="${data.results.lists[current].books[current].book_image_width}" 
                    height="${data.results.lists[current].books[current].book_image_height}">
                </div>
                <p id="Book_Title">${data.results.lists[current].books[current].title}</p>
                <p id="Book_Author">${data.results.lists[current].books[current].author}</p>
            </div>`;
}
function buildFiction(data, current){
    return `<div class="Book_Title_Author">
                <div class="Book_Cover">
                    <img src="${data.results.lists[current].books[current].book_image}" 
                    alt="${data.results.lists[current].books[current].description}"
                    width="${data.results.lists[current].books[current].book_image_width}" 
                    height="${data.results.lists[current].books[current].book_image_height}">
                </div>
                <p id="Book_Title">${data.results.lists[current].books[current].title}</p>
                <p id="Book_Author">${data.results.lists[current].books[current].author}</p>
            </div>`;
}
function buildNonFiction(data, current){
    return `<div class="Book_Title_Author">
                <div class="Book_Cover">
                    <img src="${data.results.lists[current].books[current].book_image}" 
                    alt="${data.results.lists[current].books[current].description}"
                    width="${data.results.lists[current].books[current].book_image_width}" 
                    height="${data.results.lists[current].books[current].book_image_height}">
                </div>
                <p id="Book_Title">${data.results.lists[current].books[current].title}</p>
                <p id="Book_Author">${data.results.lists[current].books[current].author}</p>
            </div>`;
}