import React, { useState, useEffect } from 'react';
import { REST_MENU } from '../utils/constants';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu';
import MenuCategory from './MenuCategory';
const ResturantMenu = () => {
  const { resId } = useParams(); //const  params = useParams(); // 
  const resMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
      if (resMenu === null) return <Shimmer />;
      const { name, cuisines, locality } = resMenu?.cards[0]?.card?.card?.info || {};
      const category=resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return (
    <div className=''>
      <div className='m-2 p-2 text-center'>
        <span className='font-bold text-lg'>{name}</span>
        <h4 className='font-bold text-sm'>{cuisines.join(', ')}</h4>
      </div>
      {category?.map((item, index) =>
        <MenuCategory key={item.card.card.title}
          data={item}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>index !== showIndex? setShowIndex(index):setShowIndex(null)}
          />
      )}
    </div>
  );
}

export default ResturantMenu
