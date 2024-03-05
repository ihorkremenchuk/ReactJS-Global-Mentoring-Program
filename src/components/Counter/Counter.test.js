import { render, screen, fireEvent } from "@testing-library/react";

import { Counter } from './Counter';

describe("test Counter component", () => {
  const count = 10;

  it("Test that component renders initial value provided in props", () => {
    render(<Counter value={ count } />);
    expect(screen.getByText(count)).toBeInTheDocument();
  });

  it(`Test that a click event on "decrement" button decrements the displayed value`, () => {
    render(<Counter value={ count } />);
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText(count - 1)).toBeInTheDocument();
  });

  it(`Test that a click event on "increment" button increments the displayed value`, () => {
    render(<Counter value={ count } />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText(count + 1)).toBeInTheDocument();
  });
});