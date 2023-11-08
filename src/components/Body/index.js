import React, { useEffect, useState } from 'react'
import ResturantCard from './RestaurantCard'
import SearchBar from './SearchBar';
import Filter from './Filter';
import './index.css';
import Shimmer from '../Shimmer';
import { Link } from 'react-router-dom';

export default function Body() {
    const arr = useState([]);
    const [dataList, setDataList] = arr // this is array destructuing
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const filterByRating = () => {
        let val = dataList.filter((ele) => ele.info?.avgRating > 4);
        setDataList(val);
    }
    useEffect(() => {
        fetchResturantData();
        
    }, []);

    const fetchResturantData = async () => {
        setLoading(true)
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setDataList(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setLoading(false);
    }

    const findSearchCard = () => {
        setLoading(true);
        let val = dataList.filter((ele) => ele.info?.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredList(val);
        setLoading(false);
    }
    console.log('filtered', filteredList)
    return (
        loading ? (<Shimmer />)
            : (<div className="body">
                <div className="search-filter">
                    <div className="searchbar">
                        <input className="search" type="text" placeholder="Search any food item ..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                        <button type="button" onClick={() => findSearchCard()}> Search</button>
                    </div>
                    <button type="button" className="filter-btn" onClick={() => filterByRating()}>Filter by top Rating</button>
                </div>
                <div className="res-container">
                    {filteredList.map((ele) => {
                        return (
                            <Link to={"restaurants/"+ele.info.id } key={ele.info.id}><ResturantCard resData={ele}  /></Link>
                        )
                    })}
                
                </div>
            </div>
            )
    );
}
