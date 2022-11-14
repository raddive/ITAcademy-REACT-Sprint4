// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map( item => item.director );
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter( item => item.director==director ); 
  console.log("EXERCICE 2 ->", result);
  return result; 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesDirector = array.filter( item => item.director==director ); 
  let scoreMoviesDirector = moviesDirector.map( item => item.score);
  let total = scoreMoviesDirector.reduce( (sum,val) => sum+val,0);
  let numMovies = scoreMoviesDirector.length;
  let result = total/numMovies;
  console.log("EXERCICE 3 ->", result.toFixed(2));
  return result;  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let moviesNames = array.map( item => (item.title) );
  let sortMoviesNames = moviesNames.sort();
  let result = sortMoviesNames.slice(0,20);
  console.log("EXERCICE 4 ->", result);
  return result;  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
