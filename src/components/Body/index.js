import React, { useContext, useEffect, useState } from "react";
import ResturantCard, { withPromtedLabelRestaurant } from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { RESTAURANT_DATA_API_URL } from "../../utils/constants";

export default function Body() {
  const arr = useState([]);
  const [dataList, setDataList] = arr; // this is array destructuing
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const filterByRating = () => {
    let val = dataList.filter((ele) => ele?.info?.avgRating > 4);
    console.log(val);
    setFilteredList(val);
  };

  const ResturantWithPromoted = withPromtedLabelRestaurant(ResturantCard);
  useEffect(() => {
    fetchResturantData();
  }, []);

  const fetchResturantData = async () => {
    setLoading(true);
    const data = await fetch(RESTAURANT_DATA_API_URL);
    const json = await data.json();
    setDataList(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setLoading(false);
  };

  const findSearchCard = () => {
    setLoading(true);
    let val = dataList.filter((ele) =>
      ele.info?.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredList(val);
    setLoading(false);
  };
  {
    filteredList?.length === 0 && <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-filter flex justify-between m-3 p-5">
        <div className="searchbar px-3 flex justify-around">
          <input
            className="h-10 p-3 "
            type="text"
            placeholder="Search any food item ..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            data-testid="searchInput"
          />
          <button
            type="button"
            onClick={() => findSearchCard()}
            className="rounded-md bg-blue-200 p-3 w-24 hover:bg-blue-400 h-[3rem]"
          >
            {" "}
            Search
          </button>
        </div>
        <button
          type="button"
          className="rounded-md bg-blue-200 p-3 hover:bg-blue-400 h-[3rem]"
          onClick={() => filterByRating()}
        >
          Filter by top Rating
        </button>
        <div>
          <input
            data-testid="userInput"
            className="h-10 p-3 border border-gray-200"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredList?.map((ele) => {
          return (
            <Link to={"restaurants/" + ele.info.id} key={ele.info.id}>
              {ele?.info?.veg ? (
                <ResturantWithPromoted resData={ele} />
              ) : (
                <ResturantCard resData={ele} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
