import React from 'react';
import * as S from './styled.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header/header.component';
import Footer from './footer/footer.component';
import MainPage from './main-page/main-page.component';
import CountryPage from './country-page/country-page.component';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" component={MainPage} exact />
        <Route path="/:id"
               render={({match}) => {
                  const {id} = match.params;
                  return <CountryPage name={id} />
                }} />
        <Footer />
      </Router>
    </>
  );
};

export default App;
