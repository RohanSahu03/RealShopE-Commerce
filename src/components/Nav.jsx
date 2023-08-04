import React, { useContext, useEffect } from 'react'
import { FaShoppingCart,FaUserCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import style from '../css/nav.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import { ProductContext } from './context/ProductContext';
import {UncontrolledCollapse,Card,CardBody} from 'reactstrap'
import { CartContext } from './context/CartContext';


function Nav() {

    const { updateSearchTerm,searchTerm}=useContext(ProductContext)
    const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
    const {cartItems} =useContext(CartContext)
    
  return (
    <div>

          <section id={style.nav}>
              <article>

                  <div className={style.menu}>
                      <ol>
                          <li><a href="">
                              <img className={style.logo} src={`real-shop.png`} alt="logo"  />
                          </a></li>
                          <li> <Link to='/' >Home</Link></li>
                          <li> <Link to='/'>Mobile</Link></li>
                          <li><Link to='/'>Headphone</Link></li>
                          <li><Link to='/'>Bag</Link></li>
                          <li><Link to='/'>T-shirt</Link></li>
                      </ol>

                  </div>

                  <div className={style.rightside}>
                      <div className={style.search}>
                          <div className={style.searchbox}>
                              <input type="search" placeholder="Search" id="searchField" autoComplete="off" value={searchTerm}
                                  onChange={(e) => updateSearchTerm(e.target.value)} />
                            </div>
                      </div>

                      <div className={style.profile}>
                          <Link className={`${style.profileLogo}`} id="toggler" ><FaUserCircle /> </Link>              
                     </div>
                       
                      <div className={style.profile}>
                          <Link to='/addToCart' className={`${style.profileLogo}`} > <FaShoppingCart> </FaShoppingCart></Link>
                      </div>

                      <div className={style.login}>
                        {
                              isAuthenticated ? (
                              <Link  onClick={() => logout({ returnTo: window.location.origin })}>Logout</Link>
                              )
                              : (
                              <Link  onClick={() => loginWithRedirect()}>Login</Link>
                              ) 
                        }
                         
                      </div>
                      {/* <div className={style.burgerSpace}>
                          <div className={style.burger}></div>
                          <div className={style.burger}></div>
                          <div className={style.burger}></div>
                      </div> */}
                  </div>

              </article>
          </section>

          <UncontrolledCollapse toggler="#toggler" style={{width:'150px',height:'80px',position:'relative',left:'820px'}}>
              <Card style={{height:'100%',fontSize:'12px'}}>
                  <CardBody style={{padding:'0px'}}>
                    {
                        isAuthenticated ? (
                            <div className="udetails">
                               Hii {user.email}
                               Enjoy your shopping
                            </div>
                            
                        ):(
                            <div className="elsePart">
                                      <b>you are logged out</b>
                                <br />
                                To access your account
                                <br />
                                      <button onClick={() => loginWithRedirect()} style={{padding:'5px',width:'80px',color:'white',backgroundColor:'blueviolet',borderRadius:'5px',borderStyle:'none'}} >sign up</button>
                            </div>
                        )
                    }
                  </CardBody>
              </Card>
          </UncontrolledCollapse>

    </div>
  )
}

export default Nav