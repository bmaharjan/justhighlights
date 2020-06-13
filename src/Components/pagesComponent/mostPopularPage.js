import React, { Component } from 'react';
import MostPopularComp from './mostPopularComp';
import queryString from 'query-string';

class MostPopularPage extends Component {

    constructor(props){
        super(props);
        this.state = { mostPopular: [], popular:'' };
    }    

    componentDidMount() {

        const values = queryString.parse(this.props.location.search);
        var url = '';
        var apiKey = 'etaB3UjQuCGf2xUdBqGLzVznEALomhDw';

        if (values.popular === 'shared') {
            if (values.period === '1') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1.json?api-key=';
            }
            if (values.period === '7') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/shared/7.json?api-key=';
            }
            if (values.period === '30') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/shared/30.json?api-key=';
            }
        } else if (values.popular === 'viewed') {
            if (values.period === '1') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=';
            }
            if (values.period === '7') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=';
            }
            if (values.period === '30') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=';
            }
        } else if (values.popular === 'emailed') {
            if (values.period === '1') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=';
            }
            if (values.period === '7') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=';
            }
            if (values.period === '30') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=';
            }
        }
        else if (values.popular === 'facebook'){
            if (values.period === '1') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=';
            }
            if (values.period === '7') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=';
            }
            if (values.period === '30') {
                url = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=';
            }
        }
        url += apiKey;

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ mostPopular: data.results })
                this.setState({ popular: values.popular })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="container">
                <center><h1>Most {this.state.popular === 'facebook' ? 'shared on Facebook' : this.state.popular + ' on NY Times'}</h1></center>
                <MostPopularComp mostPopular={this.state.mostPopular} />
            </div>
        );
    }

}

export default MostPopularPage;