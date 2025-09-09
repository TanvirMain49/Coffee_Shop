import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
<<<<<<< Updated upstream
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/Dashboard";
=======
import Login from "./Pages/login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Layout from "./components/Custom/Layout";
>>>>>>> Stashed changes

function App() {

  return (
    <div>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Dashboard></Dashboard>} />
=======
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
          }  />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={
          <Layout>
            <Profile/>
          </Layout>
          } />
>>>>>>> Stashed changes
      </Routes>
    </div>
  );
}

export default App;
