import { Route, Routes, useLocation,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/Dashboard";
import DashUser from "./components/Dashboard/DashComponents/DashUser";
import DashProduct from "./components/Dashboard/DashComponents/DashProduct";
import DashOrder from "./components/Dashboard/DashComponents/DashOrder";

function App() {

  const location = useLocation();

 
  const isDashboardRoute = location.pathname.startsWith("/admin");

  return (
    <div>
      {!isDashboardRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />


        {/* Dashboard routs */}
        {/* <Route path="/admin" element={<Dashboard></Dashboard>} /> */}
        <Route path="/admin" element={<Dashboard />}>
          <Route path="users" element={<DashUser></DashUser>} />
          <Route path="products" element={<DashProduct></DashProduct>} />
          <Route path="orders" element={<DashOrder></DashOrder>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
