import { CartContext } from './context/CartContext'

const { cartItems } = useContext(CartContext)
const initialState=1
export default function toggleQty(initialState,action){
switch (action.type) {
    case "INCREASE":
       {
        cartItems.map((item)=>{
      if (item.id === itemId) {
        if(initialState < stock){
          return initialState+1
        }
        else{
          return initialState=stock
        }

        //  item.quantity < stock ? item.quantity+1 : item.quantity=stock
      
      }
    })
       }

    default:
        break;
}
}