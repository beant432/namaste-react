import React, { useState, useEffect } from 'react';
import { REST_MENU } from '../utils/constants';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu';
const ResturantMenu = () => {
  const { resId } = useParams(); //const  params = useParams(); // 
  const resMenu = useRestaurantMenu(resId);
 

      if (resMenu === null) return <Shimmer />;
      const { name, cuisines, locality } = resMenu?.cards[0]?.card?.card?.info || {};
      const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
        console.log(resMenu);
      console.log(itemCards)
    return (
        <div>
            <h1>{name}</h1>
            <h1>{cuisines.join(', ')}</h1>
            <h3>{locality}</h3>
            {itemCards?.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price / 100}</li>)}
        </div>
    );
}

export default ResturantMenu
