import React, { useState, useEffect } from 'react';

//component
import Card from '../../../components/Card/Card';
import Aux from '../../../hoc/Auxi/Auxi';

//redux
import { connect } from 'react-redux';

//axios
import axios from '../../../axios-order';

const MyListBuilder = (props) => {
  const [movie, setMovie] = useState();
  const { id } = props;

  useEffect(() => {
    fetchData();
  }, [props.movieID]);

  const fetchData = async () => {
    let result = await axios.get(`&i=${id}`)
    setMovie(result.data);
  }

  let finalMovieList = movie
  ? <Card key={movie.imdbID} movie={movie} />
  : null

  return (
    <Aux>
      { finalMovieList }
    </Aux>
  );
}

const mapStateToProps = (state) => {
  return {
    movieID: state.myMovieList
  }
}

export default connect(mapStateToProps, null)(MyListBuilder);