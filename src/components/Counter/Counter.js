import React, { createElement } from 'react';

import { Button } from '../../elements/Button';

import './Counter.css';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: props.value };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    })); 
  };

  handleDecrement = () => {
    this.setState((prevState, props) => ({
      counter: props.counter <= 0 ? 0 : prevState.counter - 1
    }));
  };

  render() {
    return createElement(
      'div',
      { className: 'counter' },
      createElement('h2', null, 'Counter:'),
      createElement(Button, { onClick: this.handleDecrement }, '-'),
      createElement('span', {className: 'count'}, this.state.counter),
      createElement(Button, { onClick: this.handleIncrement }, '+'),
    );
  }
}
