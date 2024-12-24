//1
const movies = [
    {title:"Now you see me", type:"Action",  year:2017, rating:9.6},
    {title:"salaar", type:"Action",  year:2023, rating:9.0},
    {title:"K.G.F", type:"Action",  year:2022, rating:9.2}
   
]


//2
const addMovie = (collection, movie) => {
    collection.push(movie);
};


addMovie(movies, { title: "marvel : end game", type: "Sci-Fi",year: 2020 , rating: 8.5});


//3
const listMoviesByType = (collection, type) => {
    return collection.filter(movie => movie.type === type);
};


console.log(listMoviesByType(movies, "Sci-Fi"));


//4
const findHighestRatedMovie = (collection, rating) => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
}


console.log(findHighestRatedMovie(movies, 9.0));


//5
const getMovieTitle = collection => {
    return collection.map(movie => movie.title);
}


//6
console.log(getMovieTitle(movies));


const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.year > year);
};


//7
console.log(moviesAfterYear(movies, 2010));


movies.forEach(movie => {
    console.log(`${movie.title} (${movie.year}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});
