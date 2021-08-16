import React, { useEffect } from 'react';
import './Navigation.css';

//components
import Aux from '../../hoc/Auxi/Auxi';
import NavigationItem from './NavigationItem/NavigationItem';

//redux
import { connect } from 'react-redux';
import { handleShowMyMovie } from '../../redux/action/globalFunctionAction';

const Navigation = (props) => {
  useEffect(() => {
    handleShowTotal();
  }, []);

  const handleShowTotal = () => {
    const movie = JSON.parse(localStorage.getItem('movie'));
    if (movie) props.handleShowMyMovie(movie)
  }

  return (
    <Aux>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light toolbar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <hr />
          <ul className="navbar-nav">
            <NavigationItem link="/" hash="" search="" exact>All Movies</NavigationItem>
            <NavigationItem link="/my-movie-list" hash="" search="">My Movie List ({props.totalMovie.length})</NavigationItem>
          </ul>
          <hr/>
        </div>
      </nav>
    </Aux>
  );
}


const mapStateToProps = (state) => {
  return {
    totalMovie: state.myMovieList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowMyMovie: (data) => dispatch(handleShowMyMovie(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);