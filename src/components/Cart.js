import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleRemoveCart = () =>{
        dispatch(clearCart());
    }
    console.log(cartItems)
    return <div className="text-center p-4 m-4">
        <h1 className="font-bold text-lg">Cart</h1>
        <button className="bg-blue-200 text-black rounded-lg m-2 p-2"
            onClick={handleRemoveCart}
        >Clear cart</button>
        {cartItems.length > 0 ? <ItemList list={cartItems} /> : <h1>Cart is empty</h1>}
    </div>
}
export default Cart;