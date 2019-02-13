/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Review from './review';
import Cast from './Cast.js';

// import logo from './logo.svg';


class Movie extends Component {
  render() {
    const castM =this.props.movie.cast.map(info => {
      return <li>{info.name} {info.role}</li>;
   });
    return (
      <div>
        <h2>{this.props.movie.title} </h2>
        <img src= {this.props.movie.poster}/>
        <div><strong>Rating: {this.props.movie.rating}</strong></div>
        <p>{this.props.movie.description}</p>
        <div><strong>director: {this.props.movie.director}</strong></div>
        <ul>{castM}</ul>
        <Review />
      </div>
    );
  }
}

export default Movie;
