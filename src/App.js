import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';


// import Login from './components/Login'
// import Product from './components/Product';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Nav/>
  <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/productdetails/:pid' element={<ProductDetails/>} exact />
          <Route path='/addToCart' element={<Cart />} exact />
          <Route path='/contactus' element={<ContactUs/>}  />
          
      
          {/* <Route path='/footwear' element={<Footwear />} exact />
          <Route path='/phone' element={<SmartPhone />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/product' element={<Product />} exact /> */}

  </Routes>
  <Footer/>
  
  </BrowserRouter>
   
   </div>
   
  );
}

export default App;
