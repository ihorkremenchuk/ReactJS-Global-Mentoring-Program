import { Counter } from '../../components/Counter';
import { GenreSelect } from '../../components/GenreSelect';
import { SearchForm } from '../../components/SearchForm';

import './App.css';

export const App = () => {
  return (
    <div>
      <header className='header'>ReactJS Global Mentoring Program</header>

      <div className='content'>
        <Counter value={0} />
        <SearchForm infoText={"What do you want to watch?"} />
        <GenreSelect genreList={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']} genre={'All'} />
      </div>
    </div>
  );
}
