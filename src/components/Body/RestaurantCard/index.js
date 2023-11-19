import React from "react";
import { CDN_URL } from "../../../utils/constants";

export default function ResturantCard(props) {
  const { resData } = props;

  // optional chaining ?.
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    sla,
  } = resData?.info;
  return (
    <div data-testid="resCard" className="border border-solid mx-5 my-3 py-2 w-64 h-[28rem] bg-gray-100 hover:bg-gray-200 overflow-scroll" >
      <img
        className="res-image w-72 p-4 h-[15rem] rounded-3xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-body p-4">
        <h3 className="font-bold mb-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
}

export const withPromtedLabelRestaurant = (ResturantCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute bg-slate-500 text-white rounded-lg m-2 p-2">Veg</label>
                <ResturantCard {...props} />
            </>
        );
    }
}
