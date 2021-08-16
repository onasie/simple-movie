/* eslint-disable */
import ActionType from './globalActionType';

const globalState = {
  myMovieList: [],
  movieName: '',
  movieList: [],
  page: 1
}

//Reducer
const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.ADD_MOVIE:
      state.movieList = [...state.movieList, ...action.data]
      if (state.movieName !== action.key) 
      { state.movieName = action.key
        state.movieList = action.data
        state.page = 1 }
      localStorage.setItem('movieName', JSON.stringify(state.movieName));
      localStorage.setItem('page', JSON.stringify(state.page));
      return {
        ...state,
        movieList: state.movieList,
        movieName: state.movieName,
        page: state.page
    }

    case ActionType.ADD_PAGE:
      return {
        ...state,
        page: state.page + 1,
        movieList: state.movieList
    }

    case ActionType.ADD_MY_MOVIE:
      let oldMovieList = JSON.parse(localStorage.getItem('movie'));

      if (!oldMovieList) {
        oldMovieList = []
      }
      
      oldMovieList.push({id: action.id})
      localStorage.setItem('movie', JSON.stringify(oldMovieList));

      return {
        ...state,
        myMovieList: oldMovieList
      }

    case ActionType.SHOW_MY_MOVIE:
      return {
        ...state,
        myMovieList: action.data
      }

    case ActionType.REMOVE_MY_MOVIE:
      const removeMovie = state.myMovieList.find(res => res.id === action.id);
      state.myMovieList.splice(state.myMovieList.indexOf(removeMovie), 1);
      localStorage.setItem('movieList', JSON.stringify(state.myMovieList));

      return {
        ...state,
        myMovieList: [...state.myMovieList]
      }

    default: return state;
  }
}

export default rootReducer;