import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import { useContext, useState,useEffect } from 'react';
import style from '../css/cart.module.css'
import { FaTrash} from 'react-icons/fa'
import AddressForm from './AddressForm';
import axios from 'axios';
import CartAmountToggle from './CartAmountToggle';
import { BsCurrencyRupee } from 'react-icons/bs'




function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);
   const[address,setAddress]=useState([])
    const [productCount, setProductCount] = useState([
        { id: 1, count: 1 },
        { id: 2, count: 1 },
        { id: 3, count: 1 },
        { id: 4, count: 1 },
        { id: 5, count: 1 },
        { id: 6, count: 1 },
        { id: 7, count: 1 },
        { id: 8, count: 1 },
        { id: 9, count: 1 },
       
    ])
    const [amount, setAmount] = useState(1)
   // Callback function to update the parent state with data from the child
 
    const mystyle = {
        "display": "flex"
    }
    const mybtn = {
        "border": "none",
        "outline": "none",
        "background": "none",
        "fontSize": '18px'
    }
    
     const setDecrease = (itemId) => {
      cartItems.map((item)=>{
        if (item.id === itemId){
          if(amount > 1){
            setAmount(amount-1)
          }
          else{
           setAmount(1)
          }
        }
      })
  }

    const setIncrease = (itemId) => {
        cartItems.map((item) => {
            if (item.id === itemId) {
                if (item.quantity < item.stock) {
                   item.quantity= item.quantity + 1
                   item.subtotal= item.quantity * item.price
                }
                else {
                    item.quantity=item.stock
                }

            }
        })
    }

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
    };

    const totalPrice = cartItems.reduce(
        (accumulator, item) => accumulator + item.price*productCount,
        0
    );

     useEffect(() => {
         const getData = () => {
             axios.get('http://localhost:3000/address')
                 .then(resp => {
                     setAddress(resp.data)
                     console.log(resp.data);
                 })
                 .catch(err => console.log(err))
         }
    }, [])
    
    

    return (
        <div>

            <h6>Cart<span>({cartItems.length})</span></h6>

            <div className={`${style.main}`}>
                <div className={`${style.innermain}`}>
                    <div className={`${style.productDetails}`}>
                        <div className={`${style.tableHead}`}>Product Details</div>
                        {
                            cartItems.length === 0 ? (
                                <>
                                    <img src="../images/emptycart.png" alt="empty" className={`${style.emptycart}`} />
                                    <h6>Your cart is empty.</h6>
                                    <Link to='/' className={`${style.viewProduct}`}>
                                        View Product
                                    </Link>
                                </>
                            ) : (

                                cartItems.map((item, index) => (
                                    <>
                                        <table className="table table-primary" key={index}>
                                            <tbody >
                                                <tr className='table-primary'>
                                                    <td><img src={`../${item.image}`} alt="img" className={`${style.img}`} /></td>
                                                    <td>{item.title}</td>
                                                    <td><BsCurrencyRupee/>{item.price}</td>
                                                    
                                                    <td>
                                                        {/* <CartAmountToggle stock={item.stock} id={item.id} dataFromChild={subTotalFromChild}/> */}
                                                        <div className="amountToggle" style={mystyle}>
                                                            <button onClick={() => setDecrease(item.id)} style={mybtn}>-</button>

                                                            <div style={{ marginLeft: '10px', marginRight: '10px' }}>{item.quantity}</div>
                                                            <button onClick={() => setIncrease(item.id)} style={mybtn}>+</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {/* <SubTotalCalculater quantity={item.quantity} price={item.price} /> */}
                                                        {/* <BsCurrencyRupee />{} */}
                                                        {item.subtotal}
                                                    </td>
                                                    <td onClick={() => handleRemoveFromCart(item)}><FaTrash /></td>
                                                </tr>

                                            </tbody>
                                        </table>



                                    </>
                                )

                                ))
                        }


                    </div>{
                        cartItems.length !== 0 ? (
                            <>
                                <div className={`${style.verticalLine}`}></div>
                                <div className={`${style.priceDetails}`}>
                                    <div className={`${style.priceHead}`}>
                                        Price Details
                                    </div>
                                    <div className={`${style.bill}`}>
                                        <table className={` table ${style.table}`}>
                                            <tbody>
                                                <tr>
                                                    <td>Total Product Price</td>
                                                    <td><BsCurrencyRupee/>{
                                                    
}                                                     
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><b>Order Total</b></td>
                                                    <td><b><BsCurrencyRupee/>{totalPrice}</b></td>

                                                </tr>

                                            </tbody>
                                        </table>
                                        {

                                            address.length !== 0 ? (
                                                <div className={`${style.buybtn}`}>
                                                    <b>Buy</b>
                                                </div>
                                            ) : (<>
                                               <AddressForm/>
                                            </>)
                                        }

                                    </div>
                                </div>
                            </>
                        ) : ""
                    }

                </div>
            </div>

        </div>
    )
}

export default Cart