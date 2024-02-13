
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
import ErrorPage from './Pages/ErrorPage';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'


//Banner to Shopcategory

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>           
      {/* // Navbar is visible outside because is visible all pages */}

      <Routes>

        <Route path ='/' element ={<Shop/>}></Route>        {/* // This Shop Page have the Hero component and other component are mounted in shop page */}

          <Route path='/mens' element={<ShopCategory banner ={men_banner} category="men"/>}> </Route>   

          <Route path='/womens' element={<ShopCategory banner={women_banner}  category="women"/>}> </Route>

          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}> </Route>
          {/* <Route path ='/product' element={<Product/>}></Route> */}
          <Route path='/product/:productId' element={<Product/>}></Route>

          <Route path='/cart' element={<Cart/>}></Route>

          <Route path='/login' element={<LoginSignup/>}></Route>

          <Route path ='/*' element ={<ErrorPage/>}></Route> Its redirect to the unknown error page
          
        
      {/* Route closed  */}
      </Routes>  
    
      {/* Footer is Also visible in all pages the only is outside of the routes */}
      <Footer/>

      </BrowserRouter>  {/* Browser Router is react dom to routes*/}
    </div>
  );
}

export default App;
