import React, { useState, useEffect } from 'react';

//components
import Card from '../../components/Card/Card';
import Aux from '../../hoc/Auxi/Auxi';

//axios
import axios from '../../axios-order';

const DetailBuilder = (props) => {
  const queryString = require('query-string');
  const parsed = queryString.parse(props.location.search);
  const id = parsed['id'];
  const value = parsed['value'];
  const [state, setState] = useState({
    movieInfo: {},
    loaded: false
})

  useEffect(() => {
    fetchData();
  }, [state.loaded]);

  const fetchData = async () => {
    let result = await axios.get(`&i=${id}&plot=full`)
    setState({
      movieInfo: result.data,
      loaded: true
    })
  }

  const layout = state.loaded
  ? <Card key={id} movie={state.movieInfo} value={value}/>
  : <div>Loading...</div>

  return (
    <Aux>
      { layout }
    </Aux>
  );
}

export default DetailBuilder;