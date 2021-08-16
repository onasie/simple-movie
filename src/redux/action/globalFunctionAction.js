import ActionType from '../reducer/globalActionType';

export const handleAddMyMovie = (id) => dispatch => {
  dispatch({type: ActionType.ADD_MY_MOVIE, id})
}

export const handleShowMyMovie = (data) => dispatch => {
  dispatch({type: ActionType.SHOW_MY_MOVIE, data})
}

export const handleRemoveMyMovie = (id) => dispatch => {
  dispatch({type: ActionType.REMOVE_MY_MOVIE, id})
}

export const handleAddMovie = (key, data) => dispatch => {
  dispatch({type: ActionType.ADD_MOVIE, key, data})
}

export const handleAddPage = (name, page) => dispatch => {
  dispatch({type: ActionType.ADD_PAGE, name, page})
}