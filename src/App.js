/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Movie from './movie';
import MovieList from './movieList'



class App extends Component {
  render() {
    return (
      <div>
         <h1> Movies List</h1>
        <MovieList/> 
       
      </div>
    );
  }
}

// var Cast = require('create-react-class');
// module.exports=Cast({
//   render() {
       
//     return (
//        <div>
//         <div> <strong>{this.props.movieCast.director} {this.props.movieCast.director} </strong></div>
//        </div>
//     );
//   }
  
// });

export default App;
