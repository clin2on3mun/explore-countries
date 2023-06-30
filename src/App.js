import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchCountries } from './redux/country/countrySlice';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Showcountry from './components/CountryInfo';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryCode" element={<Showcountry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
