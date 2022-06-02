const NY_token = config.NYTIME_TOKEN;
const GOOGLE_TOKEN = config.GOOGLE_TOKEN;

var Genres = genres;
const Genres_List = genresList.Genres;
const Sub_Genres_List = genresList.Sub_Genres;
const NYT_Genre_List = NYT_Genres;

async function fillPageInitial() {
    const BestS_URL = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${NY_token}`;
    const fic_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&printType=books&maxResults=20&key=${GOOGLE_TOKEN}`;
    const nonfic_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction&orderBy=newest&printType=books&maxResults=20&key=${GOOGLE_TOKEN}`;

    const BestSellers = await getBestSellers_data(BestS_URL);
    const RandGenre = await getrandGenre_data();
    const Fiction = await getFiction_data(fic_URL);
    const nonFiction = await getnonFiciton_data(nonfic_URL);
    
    let displayed = 0;
    while(displayed!=5) {
        document.querySelector("#BestSellers_Content").innerHTML += buildBestSellers(BestSellers, displayed);
        document.querySelector("#Rand_Genre_Content").innerHTML += buildRandGenre(RandGenre, displayed);
        document.querySelector("#Trending_Non_Fiction_Content").innerHTML += buildNonFiction(Fiction, displayed);
        document.querySelector("#Trending_Fiction_Content").innerHTML += buildFiction(nonFiction, displayed);
        displayed++;
    }
}
fillPageInitial();

async function getBestSellers_data(NY_url) {
    var response = await fetch(NY_url);
        // .then(response => {
        //     if(!response.ok) {
        //         throw new Error('Error');
        //     }
        //     return response.blob;
        // });


    return response.json();
}

function getrandGenre_data() {
    var randomNumber;
    switch (0) {
        case 0:
            randomNumber = Math.floor(Math.random()*3);
            document.querySelector("#Title_Genre").innerHTML += NYT_Genre_List.Names.Fiction[randomNumber];
            return genre_data(`https://api.nytimes.com/svc/books/v3/lists.json?list=${NYT_Genre_List.List_names.Fiction[randomNumber]}&api-key=${NY_token}`);
        case 1:
            randomNumber = Math.floor(Math.random()*4);
            document.querySelector("#Title_Genre").innerHTML += NYT_Genre_List.Names.Non_Fiction[randomNumber];
            return genre_data(`https://api.nytimes.com/svc/books/v3/lists.json?list=${NYT_Genre_List.List_names.Non_Fiction[randomNumber]}&api-key=${NY_token}`);
        case 2:
            randomNumber = Math.floor(Math.random()*4);
            document.querySelector("#Title_Genre").innerHTML += NYT_Genre_List.Names.Monthly_List[randomNumber];
            return genre_data(`https://api.nytimes.com/svc/books/v3/lists.json?list=${NYT_Genre_List.List_names.Monthly_List[randomNumber]}&api-key=${NY_token}`);
        case 3:
        default:
            randomNumber = Math.floor(Math.random()*7);
            document.querySelector("#Title_Genre").innerHTML += NYT_Genre_List.Names.Childrens[randomNumber];
            return genre_data(`https://api.nytimes.com/svc/books/v3/lists.json?list=${NYT_Genre_List.List_names.Childrens[randomNumber]}&api-key=${NY_token}`);
    }
}

async function genre_data(URL) {
    var response = await fetch(URL);
    return response.json();
}

async function getFiction_data(URL) {
    var response = await fetch(URL);
    return response.json();
}

async function getnonFiciton_data(URL) {
    var response = await fetch(URL);
    return response.json();
}

function buildBestSellers(data, current) {
    return `<div class="Book_Title_Author">
                <div class="Book_Cover">
                    <img src="${data.results.lists[current].books[current].book_image}" 
                    alt="${data.results.lists[current].books[current].description}"
                    width="${0}" 
                    height="${0}">
                </div>
                <p id="Book_Title">${data.results.lists[current].books[current].title}</p>
                <p id="Book_Author">${data.results.lists[current].books[current].author}</p>
            </div>`;
}
function buildRandGenre(data, current) {
    return `<div class="Book_Title_Author">
                <div class="Book_Cover">
                    <img src="https://storage.googleapis.com/du-prd/books/images/${data.results[current].isbns[0].isbn13}.jpg" 
                    alt="${data.results[current].book_details[0].description}"
                    width="${0}" 
                    height="${0}">
                </div>
                <p id="Book_Title">${data.results[current].book_details[0].title}</p>
                <p id="Book_Author">${data.results[current].book_details[0].author}</p>
            </div>`;
}

function buildFiction(data, current) {
    var authors = "";
    var size = 0;
    for (const author of data.items[current].volumeInfo.authors) {
        authors += author;
        if(data.items[current].volumeInfo.authors.length-1!=size) {
            authors += ",";
        }
    }
    return `<div class="Book_Title_Author">
                <div class="Book_Cover">
                    <img src="${data.items[current].volumeInfo.imageLinks.thumbnail}" 
                    alt="${data.items[current].volumeInfo.description}"
                    width="${0}" 
                    height="${0}">
                </div>
                <p id="Book_Title">${data.items[current].volumeInfo.title}</p>
                <p id="Book_Author">${authors}</p>
            </div>`;
}
function buildNonFiction(data, current) {
    var authors = "";
    var size = 0;
    for (const author of data.items[current].volumeInfo.authors) {
        authors += author;
        if(data.items[current].volumeInfo.authors.length-1!=size) {
            authors += ",";
        }
    }
    return `<div class="Book_Title_Author">
                <div class="Book_Cover">
                    <img src="${data.items[current].volumeInfo.imageLinks.thumbnail}" 
                    alt="${data.items[current].volumeInfo.description}"
                    width="${0}" 
                    height="${0}">
                </div>
                <p id="Book_Title">${data.items[current].volumeInfo.title}</p>
                <p id="Book_Author">${authors}</p>
            </div>`;
}