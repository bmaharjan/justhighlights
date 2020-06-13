import React from 'react'
import dateFormat from 'dateformat';

const TopNewsComp = ({topNewsComp}) => {
    return (
        <div>
            {topNewsComp.map((news, i) => (
                <div className="card" key={i}>
                    <div className="card-body">
                        <h5 className="card-title"><a href={news.url} target='blank'>{news.title}</a></h5>
                        <div className="row">
                            <div className="col-md-2"><span className="dateBox">{dateFormat(news.updated_date, "mmmm dS, yyyy")}</span></div>
                            <div className="col-md-8"><span className="textBox">{news.abstract}</span></div>
                            {news.multimedia != null && news.multimedia.length > 1 ?
                                <div className="col-md-2"><span><img src={news.multimedia[2].url} alt='imageUrl' /></span></div>
                            : ''}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default TopNewsComp