import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Layout from "./components/Custom/Layout";
import { AuthProvider } from "./Context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
        <Route path="/admin" element={<Dashboard></Dashboard>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
