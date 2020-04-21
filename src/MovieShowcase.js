import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movieData, index) => <MovieCard
            key={index}
            title={movieData.title}
            IMDBRating={movieData.IMDBRating}
            genres={movieData.genres}
            poster={movieData.poster}
      
      
      />)
  //   const IMDBRating = movieData.map(movieData => movieData.IMDBRating)
  //   const genres = movieData.map(movieData => movieData.genres)
  //   const poster = movieData.map(movieData => movieData.poster)
  // //  <MovieCard title={title} IMDBRating={IMDBRating} genres={genres} poster={poster} /> 


  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        

      </div>
    )
  }
}

