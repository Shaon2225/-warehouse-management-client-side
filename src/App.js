import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import { Route, Routes } from 'react-router-dom';
import Blogs from './component/blog/Blogs';
import Login from './component/authentication/Login';
import Signup from './component/authentication/Signup';
import Footer from './component/footer/Footer';
import NotFound from './component/Notfound/NotFound';
import Home from './component/home/Home';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
