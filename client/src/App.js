import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import MovieCreate from './Movies/MovieCreate';
import {Link} from 'react-router-dom';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      savedList: []
    }
  }

  addToSavedList = (movie) => {
    console.log(this.state.savedList)
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({savedList});
  }

  render(){
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Link to='/movies/add'>Add new movie?</Link>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" render={ (props) => {
          return(<Movie {...props} addToSavedList={this.addToSavedList}/>)
        }} />
        <Route exact path="/movies/add" component={MovieCreate}/>
      </div>
    )
  }
}
