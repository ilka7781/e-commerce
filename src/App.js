
import './App.scss';
import Header from "./pages/header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";

import Reg from "./pages/reg/reg";
import AboutUs from "./pages/aboutUs/aboutUs";
import Basket from "./pages/basket/basket";
import MyProfile from "./pages/myProfile/myProfile";
import Products from "./pages/products/products";
import WishList from "./pages/wishList/wishList";
import Footer from "./pages/footer/footer";
import MoreCards from "./pages/products/more/moreCards";
import IphonePage from "./pages/products/pagesApple/iphonePage";
import MacBookPage from "./pages/products/pagesApple/macBookPage";
import WatchPage from "./pages/products/pagesApple/watchPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/reg' element={<Reg/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/myProfile' element={<MyProfile/>} />
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/iphone' element={<IphonePage/>}/>
            <Route path='/products/macbook' element={<MacBookPage/>}/>
            <Route path='/products/watch' element={<WatchPage/>}/>
            <Route path='/wishList' element={<WishList/>}/>
            <Route path='/details' element={<MoreCards/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
