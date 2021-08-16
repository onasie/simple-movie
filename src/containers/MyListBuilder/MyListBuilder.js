import React, { useState, useEffect } from 'react';
import './MyListBuilder.css';

//container
import MyListBuilderItem from './MyListBuilderItem/MyListBuilderItem';

//redux
import { connect } from 'react-redux';

const MyListBuilder = (props) => {
  let myListLayout = props.movieID.length !== 0
  ? props.movieID.map((data, index) => (
    <MyListBuilderItem key={index} id={data.id}/> ))
  : <div>You haven't save any movie</div>

  return (
    <div className="resultCards">
      { myListLayout } 
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      movieID: state.myMovieList
    }
}

export default connect(mapStateToProps, null)(MyListBuilder);