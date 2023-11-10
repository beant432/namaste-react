import { useState, useEffect } from 'react';
import { REST_MENU } from './constants';

//custom hook to fetch data
const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchResData();  
    }, [])
    
    const fetchResData = async () => {
        const data = await fetch(REST_MENU +resId);
        const json = await data.json();
        setResMenu(json.data);
    }
    return resMenu;
}
export default useRestaurantMenu;