import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/"><span><img src="/favicon-32x32.png" alt="logo"/></span>&nbsp;&nbsp;Quick News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Top News" id="collasible-nav-dropdown1">
                                <NavDropdown.Item href="/topNewsPage?section=world">World</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=us">US</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=nyregion">NY Region</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=sports">Sports</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=health">Health</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=politics">Politics</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=technology">Technology</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=science">Science</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=travel">Travel</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=automobiles">Automobiles</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=business">Business</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=realestate">Real Estate</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=arts">Arts</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=books">Books</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=movies">Movies</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=fashion">Fashion</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=food">Food</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=home">Home</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=insider">Insider</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=magazine">Magazine</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=obituaries">Obituaries</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=opinion">Opinion</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=sundayreview">Sunday Review</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=theater">Theater</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=t-magazine">T-Magazine</NavDropdown.Item>
                                <NavDropdown.Item href="/topNewsPage?section=upshot">Upshot</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Most Popular" id="collasible-nav-dropdown2">
                                <NavDropdown.Item href="/mostPopularPage?popular=facebook&period=1">Most Shared (1 day) on Facebook</NavDropdown.Item>
                                <NavDropdown.Item href="/mostPopularPage?popular=facebook&period=7">Most Shared (7 days) on Facebook</NavDropdown.Item>
                                <NavDropdown.Item href="/mostPopularPage?popular=facebook&period=30">Most Shared (30 days) on Facebook</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/mostPopularPage?popular=shared&period=1">Most Shared (1 day) on NY Times</NavDropdown.Item>
                                <NavDropdown.Item href="/mostPopularPage?popular=shared&period=7">Most Shared (7 days) on NY Times</NavDropdown.Item>
                                <NavDropdown.Item href="/mostPopularPage?popular=shared&period=30">Most Shared (30 days) on NY Times</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/mostPopularPage?popular=viewed&period=1">Most Viewed (1 day) on NY Times</NavDropdown.Item>
                                <NavDropdown.Item href="/mostPopularPage?popular=viewed&period=7">Most Viewed (7 days) on NY Times</NavDropdown.Item>
                                <NavDropdown.Item href="/mostPopularPage?popular=viewed&period=30">Most Viewed (30 days) on NY Times</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/mostPopularPage?popular=emailed&period=1">Most Emailed (1 day) on NY Times</NavDropdown.Item>
                                <NavDropdown.Item href="/mostPopularPage?popular=emailed&period=1">Most Emailed (7 days) on NY Times</NavDropdown.Item>
                                <NavDropdown.Item href="/mostPopularPage?popular=emailed&period=1">Most Emailed (30 days) on NY Times</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/movieReviewPage">Movie Review</Nav.Link>
                            <Nav.Link href="/aboutusPage">About Us</Nav.Link>
                            <Nav.Link href="/contactPage">Contact</Nav.Link>
                            <Nav.Link href="/signInPage">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;