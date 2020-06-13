import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Header from './Components/headerComponent/header';
import HomePage from './Components/pagesComponent/homePage';
import TopNewsPage from './Components/pagesComponent/topNewsPage';
import MostPopularPage from './Components/pagesComponent/mostPopularPage';
import MovieReviewPage from './Components/pagesComponent/movieReviewPage';
import AboutUsPage from './Components/pagesComponent/aboutusPage';
import ContactPage from './Components/pagesComponent/contactPage';
import NoMatchPage from './Components/pagesComponent/nomatchPage';
import SignInPage from './Components/pagesComponent/signInPage';
import Footer from './Components/footerComponent/footer';

import './Assets/css/default.min.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path='/topNewsPage' component={TopNewsPage} />
                        <Route exact path='/mostPopularPage' component={MostPopularPage} />
                        <Route exact path='/movieReviewPage' component={MovieReviewPage} />
                        <Route exact path='/aboutusPage' component={AboutUsPage} />
                        <Route exact path='/contactPage' component={ContactPage} />
                        <Route exact path='/signInPage' component={SignInPage} />
                        <Route exact component={NoMatchPage} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
