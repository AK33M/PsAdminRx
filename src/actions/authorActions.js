import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {
	beginAjaxCall
} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
	return {
		type: types.LOAD_AUTHORS_SUCCESS,
		authors
	};
}

export function updatedAuthorSuccess(author) {
  return {
    type: types.UPDATE_AUTHORS_SUCCESS,
    author
  };
}

export function createdAuthorSuccess(author) {
  return{
    type: types.CREATE_AUTHORS_SUCCESS,
    author
  };
}

export function loadAuthors() {
	return dispatch => {
		dispatch(beginAjaxCall());
		return AuthorApi.getAllAuthors().then(authors => {
			dispatch(loadAuthorsSuccess(authors));
		}).catch(error => {
			throw (error);
		});
	};
}

export function saveAuthor(author) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then((savedAuthor)=> {
      author.id ? dispatch(updatedAuthorSuccess(savedAuthor)) : dispatch(createdAuthorSuccess(savedAuthor));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}
