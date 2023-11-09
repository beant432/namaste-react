import React, { useState } from 'react';


const Filter = (dataList) => {
    const [data, setData] = useState([]);
    const filterByRating = () => {
        // let val = resList.filter((ele) => ele.info?.avgRating > 4);
        // setData(val);
        // dataList = val;
    }
    console.log('data', data)
    return (
        <div>
            <button type="button" className="filter-btn" onClick={()=>filterByRating()}>Filter by top Rating</button>
        </div>
    )
 }
export default Filter;
