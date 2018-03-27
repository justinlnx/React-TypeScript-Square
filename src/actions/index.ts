import SquareInterface from '../components/SquareInterface';

enum SquareActionTypes {
  GET_ALL_SQUARES = 'GET_ALL_SQUARES',
  GET_SQUARE = 'GET_SQUARE',
  CREATE_SQUARE_SUCCEEDED = 'CREATE_SQUARE_SUCCEEDED',
  DELETE_SQUARE_SUCCEEDED = 'DELETE_SQUARE_SUCCEEDED',
  UPDATE_SQUARE_SUCCEEDED = 'UPDATE_SQUARE_SUCCEEDED',
}

export default SquareActionTypes;

export interface IGetAllSquaresSucceeded {
  readonly type: SquareActionTypes.GET_ALL_SQUARES;
  readonly squares: SquareInterface[];
}

export interface IGetSquareSucceeded {
  readonly type: SquareActionTypes.GET_SQUARE;
  readonly square: SquareInterface;
}

// ...
