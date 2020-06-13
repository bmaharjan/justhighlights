import React from 'react'
import dateFormat from 'dateformat';

const MostPopularComp = ({mostPopular}) => {
    return (
        <div>
            {mostPopular.map((mp, i) => (
                <div className="card" key={i}>
                    <div className="card-body">
                        <h5 className="card-title"><a href={mp.url} target='blank'>{mp.title}</a></h5>
                        <div className="row">
                            <div className="col-md-2"><span className="dateBox"></span>Updated: {dateFormat(mp.updated, "mmmm dS, yyyy")} </div>
                            <div className="col-md-8"><span className="textBox"></span>{mp.abstract}</div>                
                            {mp.media != null && mp.media.length ?
                                <div className="col-md-2"><img src={mp.media.map(m => m['media-metadata'][0]['url'])} alt='imageUrl' /></div>
                            : ''}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MostPopularComp