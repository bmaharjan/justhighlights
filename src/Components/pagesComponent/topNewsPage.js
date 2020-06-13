import React, { Component } from 'react';
import TopNewsComp from './topNewsComp';
import queryString from 'query-string';

class TopNewsPage extends Component {

    constructor(props) {
        super(props);
        this.state = { topNewsState: [], section: '' };
    }    

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        //console.log(values.section);
        /*
        var sections = [
            ['arts', 'Arts'],
            ['automobiles', 'Auto Mobiles'],
            ['books', 'Books'],
            ['business', 'Business'],
            ['fashion', 'Fashion'],
            ['food', 'Food'],
            ['health', 'Health'],
            ['home', 'Home'],
            ['insider', 'Insider'],
            ['magazine', 'Magazine'],
            ['movies', 'Movies'],
            ['nyregion','NY Region'],
            ['obituaries','Obituaries'],
            ['opinion', 'Opinion'],
            ['politics', 'Politics'],
            ['realestate', 'Real State'],
            ['science', 'Science'],
            ['sports', 'Sports'],
            ['sundayreview', 'Sunday Review'],
            ['technology', 'Technology'],
            ['theater', 'Theater'],
            ['t - magazine', 'T - Magazine'],
            ['travel', 'Travel'],
            ['upshot', 'Upshot'],
            ['us', 'US'],
            ['world','World']
        ];
        */

        //var currentSection = sections[Math.floor(Math.random() * sections.length)];

        //api.nytimes.com/svc/topstories/v2/technology.json?api-key=etaB3UjQuCGf2xUdBqGLzVznEALomhDw
        //var url = 'https://api.nytimes.com/svc/topstories/v2/' + currentSection[0] + '.json?api-key=';
        var url = 'https://api.nytimes.com/svc/topstories/v2/' + values.section + '.json?api-key=';
        var apiKey = 'etaB3UjQuCGf2xUdBqGLzVznEALomhDw';
        url += apiKey;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ topNewsState: data.results })
                //this.setState({ section: currentSection[1] })
                this.setState({ section: values.section })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="container">
                <center><h1>{this.state.section}: Top News</h1></center>
                <TopNewsComp topNewsComp={this.state.topNewsState} />
            </div>
        );
    }

}

export default TopNewsPage;