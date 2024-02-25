import { useState, createElement } from 'react';

import { Button } from '../../elements/Button';

import './Counter.css';

export const Counter = () => {
  const [counter, updateCounter] = useState(0);

  const handleIncrement = () => {
    updateCounter(counter + 1);
  };

  const handleDecrement = () => {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  };

  return createElement(
    'div',
    { className: 'counter' },
    createElement('h2', null, 'Counter:'),
    createElement(Button, { onClick: handleDecrement }, '-'),
    createElement('span', {className: 'count'}, counter),
    createElement(Button, { onClick: handleIncrement }, '+'),
  );
}