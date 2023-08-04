import React, { useContext, useState } from 'react'
import style from '../css/productList.module.css'
import { ProductContext } from './context/ProductContext'
import Button from './Button';


function Filter() {
  const { filterProducts, filterByPrice, sortProducts, maxPrice,clearFilter } = useContext(ProductContext);
    const [amt,setAmt]=useState(maxPrice)
  const handleSorting = (event) => {
    sortProducts(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    const filterValue = event.target.value
    filterProducts(filterValue);

  };

  const handlePriceFilter = (event) => {
    const price = event.target.value
    filterByPrice(price)
    setAmt(price)
  }

  const clearFilterHandler=()=>{

    clearFilter()
  }
  //style
  const clearbtn = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '120px',
    cursor: 'pointer',
    height: '30px',
    backgroundColor: 'blueviolet',
    color: 'white',
    borderRadius: '4px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    border:'none',
    marginLeft:'20px',
    marginTop:'15px',
    marginBottom:'15px'
  }
  
  return (
   <>
      <div className={` ${style.filterDiv} `}>

        <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={handleSorting}>
          <option value="default">Sort By:</option>
          <option value="asc">Price(low to high)</option>
          <option value="dsc">Price(high to low)</option>
          <option value="az">Name(a-z)</option>
          <option value="za">Name(z-a)</option>
        </select>
        Filters
        <hr />
        Category
        <button type="button" className="btn btn-light m-1" value="all" onClick={handleFilterChange}>All</button>
        <button type="button" className="btn btn-light m-1" value="mobile" onClick={handleFilterChange}>Mobile</button>
        <button type="button" className="btn btn-light m-1" value="headphone" onClick={handleFilterChange}>Headphone</button>
        <button type="button" className="btn btn-light m-1" value="bag" onClick={handleFilterChange}>Bag</button>
        <button type="button" className="btn btn-light m-1" value="tshirt" onClick={handleFilterChange}>T-shirt</button>
        <hr />
        Price
       
         <div style={{fontSize:'11px'}}>{amt}</div>
        <input type="range"  min={0} max={maxPrice} step={5000} value={amt} onChange={handlePriceFilter} />
        {/* <button type="button" className="btn btn-light m-1" value="1000" onClick={handlePriceFilter}>Under 1000</button>
        <button type="button" className="btn btn-light m-1" value="4000" onClick={handlePriceFilter}>Under 4000</button>
        <button type="button" className="btn btn-light m-1" value="8000" onClick={handlePriceFilter}>Under 8000</button>
        <button type="button" className="btn btn-light m-1" value="15000" onClick={handlePriceFilter}>Under 15000</button> */}
        <button onClick={clearFilterHandler} style={clearbtn}>Clear Filters</button>

      </div>
   </>
  )
}

export default Filter