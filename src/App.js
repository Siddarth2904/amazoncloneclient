import './App.css';
import NavBar from './components/header/NavBar';
import NewNav from './components/newnavbar/NewNav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Signin from './components/signup_signin/Signin';
import Signup from './components/signup_signin/Signup';
import Cart from './components/cart/Cart'
import Buynow from './components/buynow/Buynow';
import { Routes, Route } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true)
    }, 1000)
  }, [])
  return (
    <>
      {
        data ? (
          <>
            <NavBar />
            <NewNav />
            <Routes>
              <Route path='/' element={<Maincomp />} />
              <Route path='/login' element={<Signin />} />
              <Route path='/register' element={<Signup />} />
              <Route path='/getproductsone/:id' element={<Cart />} />
              <Route path='/buynow' element={<Buynow />} />

            </Routes>
            <Footer />
          </>
        ) : (
          <div className='circle'>
            <CircularProgress />
            <h2>Loading...</h2>
          </div>
        )

      }

    </>
  );
}

export default App;
