import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import countries from './countries.json';

import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Link to="/" className="text-white">
            <h1>WikiCountries</h1>
          </Link>
        </Nav>
      </Navbar>

      <Route path="/" render={() => <CountriesList countries={countries} />} />
      <Route path="/:cca3" component={CountryDetail} />
    </div>
  );
}

export default App;
