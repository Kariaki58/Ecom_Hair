import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Carts from './component/Carts';
import Register from './component/Register';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Register />} />
        <Route path='/orders' element={<Carts />} />
      </Routes>
    </div>
  );
}

export default App;
