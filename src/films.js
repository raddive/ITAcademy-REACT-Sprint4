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
function orderByYear(array) {
  let moviesYearsTitles = array.map( item => ({'year': item.year ,'title':item.title}) );
  let sortmoviesYearsTitles = moviesYearsTitles.sort(function (a, b) {
      if (a.year > b.year) {
        return 1;
      }
      if (a.year < b.year) {
        return -1;
      }
      if(a.year == b.year){
          if (a.title > b.title) {
              return 1;
          }
            if (a.title < b.title) {
              return -1;
          }
          return 0;
      }
      // a must be equal to b
      return 0;});
  let result = sortmoviesYearsTitles;
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, cat) {
  let catMovies = array.filter( item => {return (item.genre.includes(cat) && item.score>0);});
  let scoreCatMovies = catMovies.map( item => item.score);
  let averageCatMovies = scoreCatMovies.reduce( (sum,val) =>sum+val,0);
  let result = (averageCatMovies/scoreCatMovies.length);
  if(Number.isInteger(result))
      result = Number(result.toFixed(0));
  else
       result = Number(result.toFixed(2));
      
  console.log("EXERCICE 6 ->", result);
  return result;
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
