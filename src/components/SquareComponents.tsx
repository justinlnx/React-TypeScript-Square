import * as React from 'react';
import SquareInterface from './SquareInterface';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as AllActions from '../actions/squareActions';
import { StoreState } from '../StoreState';

interface ISquareProps extends SquareInterface {
  actions?: any;
  squares?: SquareInterface[];
}

class SqaureComponent extends React.Component<ISquareProps, {}> {
  constructor(props: ISquareProps) {
    super(props);
    props.actions.getSquares();
  }

  getArea = (width: number) : number => {
    return width * width;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{`new component: ${this.props.color} square with area of ${this.getArea(this.props.width)}.`}</h3>
        {this.props.squares && this.props.squares.map((s, index) => (
          <h3 key={index}>{`props square: ${s.color} square with area of ${this.getArea(s.width)}.`}</h3>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state: StoreState) {
  return state;
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>) {
  return {
    actions: bindActionCreators(Object.assign({}, AllActions), dispatch),
  };
}

export default connect<{}, {}, ISquareProps>(mapStateToProps, mapDispatchToProps)(SqaureComponent);