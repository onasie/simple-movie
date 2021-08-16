import React, { useState } from 'react';
import './Card.css';

//component
import Aux from '../../hoc/Auxi/Auxi';
import Modal from '../../components/Modal/Modal';

//router
import { useHistory } from 'react-router-dom';

//bootstrap
import { Button } from "react-bootstrap";

//redux
import { connect } from 'react-redux';
import { handleAddMyMovie, handleRemoveMyMovie } from '../../redux/action/globalFunctionAction';

const Card = (props) => {
  const history = useHistory();
  const { pathname } = history.location;

  const movie = props.movie;
  const {Poster, Title, Year, imdbID} = movie;
  const [showModal, setShow] = useState(false);

  const handleSaveClicked = (e, id) => {
    e.stopPropagation()
    e.preventDefault()
    props.handleAddMyMovie(id)
  }

  const handleRemoveClicked = (e, id) => {
    e.stopPropagation()
    e.preventDefault()
    props.handleRemoveMyMovie(id)
  }

  const handleCardClicked = (e, id) => {
    e.stopPropagation()
    e.preventDefault()
    if(props.value != 0) {
      let value = pathname === '/my-movie-list'? 0 : 1
      history.push(`/movie-detail?id=${id}&value=${value}`)
      }
  }

  const handlePosterClicked = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setShow(true)
  }

  let button = pathname !== '/my-movie-list'
  ? <Button variant="primary" onClick={(e) => handleSaveClicked(e, imdbID)}>
    Save
  </Button>
  : <Button variant="primary" onClick={(e) => handleRemoveClicked(e, imdbID)}>
    Remove
  </Button>

  let layout = pathname !== '/' && pathname !== '/my-movie-list'
  ? <Aux>
    <p>Title: {Title}</p>
    <p>Released: {movie.Released}</p>
    <p>Genre: {movie.Genre}</p>
    <p>Language: {movie.Language}</p>
    <p>Country: {movie.Country}</p>
    <p>Actors: {movie.Actors}</p>
    <p>{movie.Plot}</p>
    <Button variant="primary" onClick={(e) => handleSaveClicked(e, imdbID)}>
      Save
    </Button>
  </Aux>
  : <Aux>
    <p>{Title}</p>
    <p>{Year}</p>
    <div>
      <Button variant="secondary" onClick={(e) => handleCardClicked(e, imdbID)}>
        Detail
      </Button>
      { button }
    </div>
  </Aux>

  return (
    <Aux>
      <div className="movieCard" onClick={(e) => handlePosterClicked(e)}>
        <img src={Poster} alt={'Picture of ' + Title}/>
        { layout }
        { <Modal movie={movie} showModal={showModal} />}
      </div>
    </Aux>
  );
}

const mapStateToProps = (state) => {
  return {
    myMovieList: state.myMovieList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddMyMovie: (id) => dispatch(handleAddMyMovie(id)),
    handleRemoveMyMovie: (id) => dispatch(handleRemoveMyMovie(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);