import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getAllCountries } from '../utilities/travel.service';

import Header from './header/header.component';
import Footer from './footer/footer.component';
import MainPage from './main-page/main-page.component';
import CountryPage from './country-page/country-page.component';
import Authentication from './Authentication';
import { AuthenticationProvider } from './contexts/AuthenticationContext';



const App = () => {
  let loadLanguage = JSON.parse(localStorage.getItem('language'));
  const [searchValue, updateSearchValue] = useState('');
  const [language, updateLanguage] = useState(
    loadLanguage ? loadLanguage : 'en'
  );
  const [allCountries, updateAllCountries] = useState([]);

  useEffect(() => {
    getAllCountries().then((response) => {
      updateAllCountries(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify(language));
  }, [language]);

  return (
    <>
      <Router>
        <AuthenticationProvider>
          <Header
            searchValue={searchValue}
            updateSearchValue={updateSearchValue}
            language={language}
            updateLanguage={updateLanguage}
          />
          <Authentication language={language} />
          <Route
            path="/"
            render={() => (
              <MainPage
                searchValue={searchValue}
                language={language}
                allCountries={allCountries}
              />
            )}
            exact
          />
          <Route
            path="/countries/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <CountryPage countryId={id} language={language} />;
            }}
          />
        </AuthenticationProvider>
        <Footer />
      </Router>
    </>
  );
};

export default App;
