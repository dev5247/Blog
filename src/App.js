import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Blog from './layout/blog/Blog';
import Login from './layout/login/Login';
import Signup from './layout/singup/Signup';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} ></Route>
          {/* <Route exact path='/register' element={<Signup />}></Route> */}
          <Route exact path='/blog' element={<Blog />} ></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
