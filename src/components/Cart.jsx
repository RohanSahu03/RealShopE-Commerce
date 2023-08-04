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
    const [productCount, setProductCount]=useState(1)
   // Callback function to update the parent state with data from the child
   const subTotalFromChild=(data)=>{
        setProductCount(data)
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
                                                    <td><img src={`../${item.thumb}`} alt="img" className={`${style.img}`} /></td>
                                                    <td>{item.title}</td>
                                                    <td><BsCurrencyRupee/>{item.price}</td>
                                                    
                                                    <td>
                                                        <CartAmountToggle stock={item.stock} id={item.id} dataFromChild={subTotalFromChild}/>
                                                    </td>
                                                    <td>
                                                        {/* <SubTotalCalculater quantity={item.quantity} price={item.price} /> */}
                                                        {/* <BsCurrencyRupee />{} */}
                                                        {productCount*item.price}
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
                                                    <td><BsCurrencyRupee/>{totalPrice}</td>
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