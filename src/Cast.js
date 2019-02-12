/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Movie from './movie';
import MovieList from './movieList'



class Cast extends Component {
  render() {
    return (
       <div>
      <div> <strong>{this.props.castinfo.name} {this.props.castinfo.role}</strong></div>
      </div>
    );
  }
}

export default Cast;
