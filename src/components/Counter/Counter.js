import React, { createElement } from 'react';

import { Button } from '../../elements/Button';

import './Counter.css';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter++
    })); 
  };

  handleDecrement = () => {
    this.setState((prevState, props) => ({
      counter: props.counter <= 0 ? 0 : prevState.counter++
    }));
  };

  render() {
    return createElement(
      'div',
      { className: 'counter' },
      createElement('h2', null, 'Counter:'),
      createElement(Button, { onClick: this.handleDecrement }, '-'),
      createElement('span', {className: 'count'}, this.counter),
      createElement(Button, { onClick: this.handleIncrement }, '+'),
    );
  }
}
