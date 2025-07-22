import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import Country from './Country';
import '../styles/home.css';

const Home = () => {
  const { countries, isLoading, error } = useSelector((store) => store.country);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const filtered = countries.filter((country) => (
    country.name.common.toLowerCase().includes(search.toLowerCase())));

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="search-Region">
        <input
          id="search-input"
          type="text"
          name="search"
          value={search}
          className="input-field"
          placeholder="search eg:Europe"
          onChange={handleChange}
        />
        <button type="button" className="btn" aria-label="Search">search</button>
      </div>
      {isLoading ? <div>loading.......</div> : null}
      {error ? <div>Error from Api call</div> : null}
      <div className="container">
        {search && filtered.length === 0 ? (
          <h2 className="no-results">No results found</h2>
        ) : (
          filtered.map((country) => (
            <div
              className="country-card"
              key={country.cca3}
              onClick={() => navigate(`/country/${country.name.common}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  navigate(`/country/${country.name.common}`);
                }
              }}
              tabIndex={0}
              role="button"
            >
              <BiRightArrowAlt className="arrow-right" />
              <Country
                name={country.name.common}
                flag={country.flags.png}
                number={country.population}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
