 
  import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
  import Home from './Components/Home';
  import About from './Components/About';
  import Login from './Components/Login';
  import Contact from './Components/Contact';
  import Register from './Components/Register';
  import Navbar2 from './Components/Navbar2';
  import Cart from './Components/Cart';

  import Myorders from './Components/Myorders';
  import Books from './Components/Books';
  import Adminhome from './Components/adminhome';
  import AddBooks from './Components/AddBooks'
  import Users from './Components/Users';
  import Orders from './Components/Orders';
 
  import Changepassword from './Components/Changepassword';
  import FeedbackForm from './Components/FeedBack';
import Address from './Components/Address';
import ViewBooks from './Components/ViewBook';
import AdminUser from './Components/AdminUser';


  function App() {
    return (
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/navbar2" element={<Navbar2 />} />
            <Route path="/cart" element={<Cart />} />
           
            <Route path="/myorders" element={<Myorders />} />
            <Route path="/books" element={<Books />} />
            <Route path="/admin-dashboard" element={<Adminhome />} />
            <Route path="/addbooks" element={<AddBooks />} />
            <Route path="/adminuser" element={<AdminUser />} />
            <Route path="/viewbook" element={<ViewBooks />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
         
            <Route path="/changepassword" element={<Changepassword/>} />
            <Route path="/feedback" element={<FeedbackForm/>} />
            <Route path="/address" element={<Address/>} />
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  export default App;
