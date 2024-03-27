import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardAdmin from "./pages/DashboardAdmin";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />  
          <Route path="/register" element={<Register />} />        
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard_admin" element={<DashboardAdmin />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;