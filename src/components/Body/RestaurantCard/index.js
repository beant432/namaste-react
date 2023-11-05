import React from 'react'
import { CDN_URL } from '../../../utils/constants';
import './index.css';

export default function ResturantCard(props) {
    const { resData } = props;

    // optional chaining ?. 
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName, sla } = resData?.info;
    return (
        
        <div className="res-card">
            <img className="res-image" src={CDN_URL+ cloudinaryImageId} />
            <div className="res-body">
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} Stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{areaName}</h4>
                <h4>{sla.slaString}</h4>
            </div>
        </div>
    );
}
