import CartItem from "../../model/cart-item";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import { ADD_ORDER } from "../actions/oreder";
import { DELETE_PRODUCT } from "../actions/products";

const initialState={
  items:{},
  totalAmount:0
};
export default (state=initialState,action)=>{
    switch(action.type)
    {
        case ADD_TO_CART:
            const addedProduct=action.product;
            const prodPrice = addedProduct.price;

            const prodTitle=addedProduct.title;
            let updatedOrNewCartItem;
            if(state.items[addedProduct.id]){
                updatedOrNewCartItem=new CartItem(
                        state.items[addedProduct.id].quantity+1,
                        prodPrice,
                        prodTitle,
                        state.items[addedProduct.id].sum+prodPrice
                    );
                    console.log(updatedOrNewCartItem.sum)
                
            }else{
                updatedOrNewCartItem=new CartItem(1,prodPrice,prodTitle,prodPrice)
               
            }
            return{...state,items:{...state.items,[addedProduct.id]:updatedOrNewCartItem},
            totalAmount: +state.totalAmount+prodPrice
         
        }
        case REMOVE_FROM_CART:
            const currentQuantity=state.items[action.pId].quantity
            const selectedCartItem = state.items[action.pId] 
            let updatedCartItems;
            if(currentQuantity>1)
            {
                     const updatedCartItem=new CartItem(selectedCartItem.quantity-1,
                        selectedCartItem.productPrice,selectedCartItem.productTitle,selectedCartItem.sum-selectedCartItem.productPrice)
                updatedCartItems={...state.items,[action.pId]:updatedCartItem}
                    }else{
                 updatedCartItems ={...state.items}
                delete updatedCartItems[action.pId]
            }
            return{...state,items:updatedCartItems,totalAmount:state.totalAmount-selectedCartItem.productPrice}
       
            case ADD_ORDER:
                return initialState
            case DELETE_PRODUCT:
                if(!state.items[action.pId])
                {
                    return state
                }
                const updatedItems={...state.items}
                const itemTotal = state.items[action.pId].sum
                delete updatedItems[action.pId]
                return{...state,items:updatedItems,totalAmount:+state.totalAmount-itemTotal}
            default:
            return state
    }

}