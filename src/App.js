import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ViewMovies from './pages/ViewMovies';
import LoginPage from './pages/LoginPage';

import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
global.jQuery = $;

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ViewMovies" element={<ViewMovies />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
