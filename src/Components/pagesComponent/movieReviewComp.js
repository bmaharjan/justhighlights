import React from 'react'
import dateFormat from 'dateformat';

const MovieReviewComp = ({movieReview}) => {
    
    return (
        <div>
            {movieReview.map((mr, i) => (
                <div className="card" key={i}>
                    <div className="card-body">
                        <h5 className="card-title"><a href={mr.link.url} target='blank'>{mr.display_title}</a></h5>
                        <h6>{mr.headline}</h6>
                        <div className="row">
                            <div className="col-md-2"><span className="dateBox">Updated: {dateFormat(mr.date_updated, "mmmm dS, yyyy")}</span></div>
                            <div className="col-md-7"><span className="textBox">{mr.summary_short}</span></div>                      
                            {mr.multimedia != null ?    //if there is no image for searched movie
                                <div className="col-md-3"><img src={mr.multimedia != null ? mr.multimedia.src : ''} alt='imageUrl' /></div>
                            : ''}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MovieReviewComp