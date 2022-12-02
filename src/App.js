
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Blogs from './Component/Blogs/Blogs';
import Reviews from './Component/Reviews/Review';
import DashBord from './Component/Dashbord/DashBord'
import About from './Component/About/About'
import NotFound from './Component/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/blog' element={<Blogs></Blogs>} ></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<DashBord></DashBord>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
