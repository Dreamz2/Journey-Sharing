// will be implementing node.js or some sort of way to retrive this file in json format 
var genres = {
    Genres: {
        Popular_Genres: {
            Fiction:[
                "Fantasy",
                "Science-Fiction",
                "Dystopian",
                "Action-and-Adventure",
                "Mystery",
                "Horror",
                "Thriller-and-Suspense",
                "Historical-Fiction",
                "Romance",
                "Womens-Fiction",
                "LGBTQ",
                "Contemporary-Fiction",
                "Literary-Fiction",
                "Magical-Realism",
                "Graphic-Novel",
                "Short-Story",
                "Young-Adult",
                "Childrens",
            ],
            Non_Fiction: [
                "Memoir-and-Autobiography",
                "Biography",
                "Food-and-Drink",
                "Art-and-Photography",
                "Self-help",
                "History",
                "Travel",
                "True-Crime",
                "Humor",
                "Essays",
                "Guides",
                "How-to",
                "Religion-and-Spirituality",
                "Humanities-and-Social-Sciences",
                "Parenting-and-Families",
                "Science-and-Technology",
                "Childrens",
            ]
        },
        Non_Popular_Genres:{

        }
    },
    Sub_Genres:{

    }
};

var genresList = {
    Genres: {
        Popular_Genres: {
            Fiction: [
                "Fantasy",
                "Science Fiction",
                "Dystopian",
                "Action & Adventure",
                "Mystery",
                "Horror",
                "Thriller & Suspense",
                "Historical Fiction",
                "Romance",
                "Womens Fiction",
                "LGBTQ+",
                "Contemporary Fiction",
                "Literary Fiction",
                "Magical Realism",
                "Graphic Novel",
                "Short Story",
                "Young Adult",
                "Children's",
            ],
            Non_Fiction: [
                "Memoir & Autobiography",
                "Biography",
                "Food & Drink",
                "Art & Photography",
                "Self help",
                "History",
                "Travel",
                "True Crime",
                "Humor",
                "Essays",
                "Guides",
                "How to",
                "Religion & Spirituality",
                "Humanities & Social Sciences",
                "Parenting & Families",
                "Science & Technology",
                "Children’s"
            ]
        },
        Non_Popular_Genres: {
            
        }
    },
    Sub_Genres: {
        
    }
};

var NYT_Genres = {
    List_names:
    {
        Fiction: [
            "combined-print-and-e-book-fiction",
            "hardcover-fiction",
            "trade-fiction-paperback"
        ],
        Non_Fiction: [
            "combined-print-and-e-book-nonfiction",
            "hardcover-nonfiction",
            "paperback-nonfiction",
            "advice-how-to-and-miscellaneous",
        ],
        Childrens: [
            "childrens-middle-grade-hardcover",
            "picture-books",
            "series-books",
            "young-adult-hardcover"
        ],
        Monthly_List: [
            "audio-fiction",
            "audio-nonfiction",
            "business-books",
            "graphic-books-and-manga",
            "mass-market-monthly",
            "middle-grade-paperback-monthly",
            "young-adult-paperback-monthly"
        ]
    },
    Names: {
        Fiction: [
            "Combined Print & E-Book Fiction",
            "Hardcover Fiction",
            "Paperback Trade Fiction"
        ],
        Non_Fiction: [
            "Combined Print & E-Book Nonfiction",
            "Hardcover Nonfiction",
            "Paperback Nonfiction",
            "Advice, How-To & Miscellaneous"
        ],
        Childrens: [
            "Children’s Middle Grade Hardcover",
            "Children’s Picture Books",
            "Children’s Series",
            "Young Adult Hardcover"
        ],
        Monthly_List: [
            "Audio Fiction",
            "Audio Nonfiction",
            "Business",
            "Graphic Books and Manga",
            "Mass Market",
            "Middle Grade Paperback",
            "Young Adult Paperback"
        ]
    }
}

// Paperback Mass-Market Fiction mass-market-paperback

// E-Book Fiction e-book-fiction
// E-Book Nonfiction e-book-nonfiction
// Hardcover Advice & Misc. hardcover-advice
// Paperback Advice & Misc. paperback-advice
// Advice, How-To & Miscellaneous advice-how-to-and-miscellaneous
// Hardcover Graphic Books hardcover-graphic-books
// Paperback Graphic Books paperback-graphic-books
// Manga manga
// Combined Hardcover & Paperback Fiction combined-print-fiction
// Combined Hardcover & Paperback Nonfiction combined-print-nonfiction
// Children’s Chapter Books chapter-books
// Children’s Middle Grade childrens-middle-grade
// Children’s Middle Grade E-Book childrens-middle-grade-e-book
// Children’s Middle Grade Hardcover childrens-middle-grade-hardcover
// Children’s Middle Grade Paperback childrens-middle-grade-paperback
// Children’s Paperback Books paperback-books
// Children’s Picture Books picture-books
// Children’s Series series-books
// Young Adult young-adult
// Young Adult E-Book young-adult-e-book
// Young Adult Hardcover young-adult-hardcover
// Young Adult Paperback young-adult-paperback
// Animals animals
// Audio Fiction audio-fiction
// Audio Nonfiction audio-nonfiction
// Business business-books
// Celebrities celebrities
// Crime and Punishment crime-and-punishment
// Culture culture
// Education education
// Espionage espionage
// Expeditions expeditions-disasters-and-adventures
// Fashion, Manners and Customs fashion-manners-and-customs
// Food and Diet food-and-fitness
// Games and Activities games-and-activities
// Graphic Books and Manga graphic-books-and-manga
// Hardcover Business Books hardcover-business-books
// Health health
// Humor humor
// Indigenous Americans indigenous-americans
// Love and Relationships relationships
// Mass Market mass-market-monthly
// Middle Grade Paperback middle-grade-paperback-monthly
// Paperback Business Books paperback-business-books
// Parenthood and Family family
// Politics and American History hardcover-political-books
// Race and Civil Rights race-and-civil-rights
// Religion, Spirituality and Faith religion-spirituality-and-faith
// Science science
// Sports and Fitness sports
// Travel travel
// Young Adult Paperback young-adult-paperback-monthly