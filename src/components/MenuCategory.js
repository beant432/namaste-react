import { useState } from 'react';
import ItemList from './ItemList';

//controlled component bcz parent ResturantMenu is controlling /don't have its own state
const MenuCategory = ({ data, showItems, setShowIndex , index, showIndex}) => {
    const { title, itemCards } = data?.card?.card;
    const handleClick = (e) => {
    //     if (index !== showIndex) {
    //     setShowIndex(index);
    //  } else {
    //    setShowIndex(null);
        // }
        setShowIndex()
    }
    return (
        <div className="border-b-2 p-4 shadow-lg w-9/12 m-auto">
            <div className="flex justify-between text-left" onClick={(e)=>{handleClick(e)}}>
            <div className=' font-bold'>{title}</div>
                <div >^</div>
            </div>
            <div>
                {showItems &&
                    <ItemList list={itemCards} />}
            </div>
           
        </div>
       
    )
}
export default MenuCategory;