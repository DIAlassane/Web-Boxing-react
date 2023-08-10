import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Product from './routes/product';
import Weboxes from './routes/Weboxes';
import Service from './routes/service';
import Panier from './routes/panier';
import Login from './routes/Login';
import Signup from './routes/Signup';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/Weboxes" element={<Weboxes/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Panier" element={<Panier/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>

    </div>
  );
};

export default App;
