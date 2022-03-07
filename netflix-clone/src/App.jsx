// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import FavList from './components/FavList';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/fav" element={<FavList />} />
  </Routes>
  );
}

export default App;
