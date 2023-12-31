import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../store/cartSlice";

const ItemList = ({ list }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {list?.map((t) => {
        const { name, price, description, imageId, id, defaultPrice } =
          t.card?.info;
        return (
          <div
            data-testid="fooditems"
            className="border-b-2 border-gray-100 flex justify-between m-2 p-4 "
            key={id}
          >
            <div className="w-9/12">
              <h1 className="text-sm">{name} </h1>
              <h1 className="text-sm">
                {" "}
                Rs. {price ? price / 100 : defaultPrice / 100}
              </h1>
              {description && <p className="text-xs">{description}</p>}
            </div>

            <div className="flex flex-column m-2 text-right w-3/12">
              {imageId && (
                <img
                  className="w-full h-48 object-cover"
                  src={CDN_URL + imageId}
                />
              )}
              <button onClick={() => handleAddItem(t)}>Add +</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
