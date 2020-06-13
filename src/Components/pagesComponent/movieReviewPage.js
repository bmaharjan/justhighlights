import React, { Component } from 'react';
import MovieReviewComp from './movieReviewComp';


class MovieReviewPage extends Component {

    constructor(props){
        super(props);
        this.state = { movieSearch: '', movieReview: [], movieName: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    handleChange(event) {
        this.setState({movieSearch: event.target.value});
    }

    handleSubmit(event) {
        var url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + this.state.movieSearch + '&api-key=';
        var apiKey = 'etaB3UjQuCGf2xUdBqGLzVznEALomhDw';
        url += apiKey;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ movieReview: data.results })
            })
            .catch(console.log)
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">        
                <center><h3>Search Movie</h3></center>                        
                <div className="card">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Movie Name:&nbsp;
                        <input type="text" value={this.state.movieSearch} onChange={this.handleChange} />
                        </label>
                        &nbsp;
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                
                <center><h3>{this.state.movieSearch} Review</h3></center>
                <MovieReviewComp movieReview={this.state.movieReview} />
                
            </div>
        );
    }

}

export default MovieReviewPage;