import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Dashboard from './components/pages/Dashboard';
import Cart from './components/pages/Cart';
import CompletedOrder from './components/pages/CompletedOrder';
import Profile from './components/pages/Profile';
import Product from './components/pages/Product';
import Orders from './components/pages/Orders';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

function App() {
  let [isLogin, setIsLogin] = useState(false)
  let state = useSelector((state) => state)
  let [cookies, setcookies, removecookies] = useCookies('token')
  useEffect(() => {
    if (state.signin.token) {
      let expiryDate = new Date()
      expiryDate.setHours(expiryDate.getHours() + 1)
      setcookies('token', state.signin.token, { path: '/', expires: expiryDate })
      localStorage.setItem("token", state.signin.token)
      setIsLogin(true)
    }
  }, [state])

  // setInterval(() => {
  //   if (!cookies.token) {
  //     setIsLogin(false);
  //     // localStorage.removeItem("token")
  //   }
  // }, 5000);

  useEffect(() => {
    if (cookies.token) {
      setIsLogin(true);
    }
  }, [])

  return (
    <div className="App">
      <CookiesProvider>
        <Container fluid className='g-0'>
          <BrowserRouter>
            <Routes>
              {(isLogin) ?
                <Fragment>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/completedOrder" element={<CompletedOrder />} />
                  <Route path="/profile" element={<Profile />} />
                </Fragment>
                :
                <Fragment>
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/" element={<SignIn />} />
                </Fragment>
              }
            </Routes>
          </BrowserRouter>
        </Container>
      </CookiesProvider>
    </div>
  );
}

export default App;
