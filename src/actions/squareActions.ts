import SquareActionTypes, { IGetAllSquaresSucceeded } from './index';
import SquareInterface from '../components/SquareInterface';

const squares = [
  {
    color: 'yellow',
    width: 20
  },
  {
    color: 'red',
    width: 30
  },
  {
    color: 'green',
    width: 50
  },
];

export function getSquares () : (dispatch: any) => Promise<IGetAllSquaresSucceeded> {
  return function(dispatch) {
      return dispatch(receiveSquares(squares));
  };
}

function receiveSquares (json: SquareInterface[]) : IGetAllSquaresSucceeded {
  return {
      type: SquareActionTypes.GET_ALL_SQUARES,
      squares: json,
  };
}