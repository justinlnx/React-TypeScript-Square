import SquareActionTypes from './constants';
import SquareInterface from '../components/SquareInterface';

export interface IGetAllSquaresSucceeded {
  readonly type: SquareActionTypes.GET_ALL_SQUARES;
  readonly squares: SquareInterface[];
}

export interface IGetSquareSucceeded {
  readonly type: SquareActionTypes.GET_SQUARE;
  readonly square: SquareInterface;
}

// ...
