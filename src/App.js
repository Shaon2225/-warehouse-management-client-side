import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/Header";
import { Route, Routes } from "react-router-dom";
import Blogs from "./component/blog/Blogs";
import Login from "./component/authentication/Login";
import Signup from "./component/authentication/Signup";
import Footer from "./component/footer/Footer";
import NotFound from "./component/Notfound/NotFound";
import Home from "./component/home/Home";
import RequireAuth from "./RequreAuth";
import ItemDetails from "./component/itemdetails/ItemDetails";
import AddItem from "./component/AddItem/AddItem";
import MangeItem from "./component/mangeItem/MangeItem";
import Myorder from "./component/myorder/Myorder";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/itemdetails/:id"
          element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitem"
          element={
            <RequireAuth>
              <MangeItem></MangeItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myorders"
          element={
            <RequireAuth>
              <Myorder></Myorder>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
