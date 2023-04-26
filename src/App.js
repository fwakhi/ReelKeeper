
import './App.css';
import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import Header from './components/Header';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=48b027b6`;
  const response = await fetch(url);
  const responsJson = await response.json();
 if(responsJson.Search){
  setMovies(responsJson.Search)
 }
 
}
useEffect(()=>{
  getMovieRequest(searchValue);
}, [searchValue]);

const addFavouriteMovie = (movie) => {
  const newFavouriteList = [...favourites, movie];
  setFavourites(newFavouriteList);
  console.log(newFavouriteList);
}
  return (
    
      <div className="container-fluid movie-app">
        <Header/>
        
        <div className='row d-flec align-items-center mt-4 mb-4'>
          <MovieListHeading heading="Movies"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className='row'>
          <MovieList 
          movies={movies} 
          handleFavouritesClick={addFavouriteMovie} 
          favouriteComponent={AddFavourites}/>
          </div>

          <div className='row d-flec align-items-center mt-4 mb-4'>
          <MovieListHeading heading="Favourites"/>
        </div>

        <div className='row'>
          <MovieList 
          movies={favourites} 
          handleFavouritesClick={addFavouriteMovie} 
          favouriteComponent={AddFavourites}/>
          </div>
      </div>
   
  );
}

export default App;
