import { CDN_URL } from "../utils/constants";

const ItemList = ({ list }) => {
    return (
        
        <div className="">
            {list.map((t) => {
                const { name, price, description, imageId, id } = t.card?.info;
                return (
                <div className="border-b-2 border-gray-100 flex justify-between m-2 p-4 " key={id}>
                    <div className="w-9/12"><h1 className="text-sm">{name}  </h1>
                        <h1 className="text-sm"> Rs. {price / 100}</h1>
                        <p className="text-xs">{description}</p>
                    </div>
                    
                    <div className="flex flex-column m-2 text-right w-3/12">
                            <img className="w-full h-48 object-cover" src={CDN_URL + imageId} />
                            <button>Add +</button>
                    </div>
                </div>
                )
            } 

                
            )}
        </div>
    );
}
export default ItemList;