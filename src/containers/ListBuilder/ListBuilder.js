import React, { useState, useEffect } from 'react';
import './ListBuilder.css';

//components
import Card from '../../components/Card/Card';
import Aux from '../../hoc/Auxi/Auxi';
import Search from '../../components/Search/Search';

//axios
import axios from '../../axios-order';

//redux
import { connect } from 'react-redux';
import { handleAddMovie, handleAddPage } from '../../redux/action/globalFunctionAction';

const ListBuilder = (props) => {
    useEffect(() => {
      window.addEventListener('scroll', infiniteScroll);
    }, [window]);

  const infiniteScroll = () => {
    const JSONmovie = JSON.parse(localStorage.getItem('movieName'));
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight && JSONmovie.length > 5
    ) 
    {
      props.handleAddPage();
      moreData();
    }
  }
  const handleSearch = async (key) => {
    let result = await axios.get(`&s=${key}`)
    if (result.data.Search) props.handleAddMovie(key, result.data.Search);
  }

  const moreData = async () => {
    const JSONpage = JSON.parse(localStorage.getItem('page')) + 1;
    const JSONmovie = JSON.parse(localStorage.getItem('movieName'));
    let result = await axios.get(`&s=${JSONmovie}&page=${JSONpage}`)
    props.handleAddMovie(JSONmovie, result.data.Search);
  }

  let finalMovieList = props.movieList
  ? props.movieList.map((movie, index) => (
    <Card key={index} movie={movie} /> ))
  : null
  
  return (
    <Aux>
      <Search handleSearch={handleSearch}/>
      <div className="resultCards">
        { finalMovieList }
      </div>
    </Aux>
  );
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
    movieName: state.movieName,
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddMovie: (key, data) => dispatch(handleAddMovie(key, data)),
    handleAddPage: (key, page) => dispatch(handleAddPage(key, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBuilder);