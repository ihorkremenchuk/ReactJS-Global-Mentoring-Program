import { render, screen, fireEvent } from "@testing-library/react";

import { GenreSelect } from './GenreSelect';

describe("test GenreSelect component", () => {
  const genreList = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const genre = 'All'

  it("Test that component renders all genres passed in props", () => {
    render(<GenreSelect genreList={genreList} genre={genre} />);

    genreList.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    })
  });

  it(`Test that component highlights a selected genre passed in props`, () => {
    render(<GenreSelect genreList={genreList} genre={genre} />);

    expect(screen.getByText(genre)).toHaveClass('active');
  });

  it(`Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments`, () => {
    render(<GenreSelect genreList={genreList} genre={genre} />);

    fireEvent.click(screen.getByText("Comedy"));

    expect(screen.getByText("Comedy")).toHaveClass('active');
  });
});