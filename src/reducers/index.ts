import SquareInterface from '../components/SquareInterface';
import ActionTypes from '../actions/actionTypes';
import SquareActionTypes from '../actions';

export function square(state: any = {}, action: ActionTypes) {
  switch(action.type) {
    case SquareActionTypes.GET_ALL_SQUARES:
      return {
        squares: action.squares
      };
    default:
      return state;
  }
}