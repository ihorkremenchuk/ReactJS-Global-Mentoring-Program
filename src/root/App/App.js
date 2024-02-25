import {Counter} from '../../components/Counter';
import { SearchForm } from '../../components/SearchForm';

import './App.css';

export const App = () => {
  return (
    <div>
      <header className='header'>ReactJS Global Mentoring Program</header>

      <div className='content'>
        <Counter/>
        <SearchForm/>
      </div>
    </div>
  );
}
