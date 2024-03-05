import { render, screen, fireEvent, hasInputValue } from "@testing-library/react";

import { SearchForm } from './SearchForm';

describe("test SearchForm component", () => {
  const text = 'test';
  it("Test that component renders an input with the value equal to initial value passed in props", () => {
    render(<SearchForm infoText={ text } />);
    expect(screen.getByPlaceholderText(text)).toBeInTheDocument();
  });

  it(`Test that after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value`, () => {
    render(<SearchForm infoText={ text } />);
    const input = screen.getByPlaceholderText(text)
    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.click(screen.getByText("Search"));
    
    expect(screen.getByText("Value: test")).toBeInTheDocument();
  });

  xit(`Test that after typing to the input and pressing Enter key, the "onChange" prop is called with proper value`, () => {
    render(<SearchForm infoText={ text } />);
    const input = screen.getByPlaceholderText(text)
    fireEvent.change(input, { target: { value: 'test 2' } })
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
    
    expect(screen.getByText("Value: test 2")).toBeInTheDocument();
  });
});