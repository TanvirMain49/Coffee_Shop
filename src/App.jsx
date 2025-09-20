import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/Dashboard";
import DashUser from "./components/Dashboard/DashComponents/DashUser";
import DashProduct from "./components/Dashboard/DashComponents/DashProduct";
import DashOrder from "./components/Dashboard/DashComponents/DashOrder";
import { AuthProvider } from "./Context/AuthProvider";
import Profile from "./Pages/Profile";
import Login from "./Pages/login";
import Signup from "./Pages/Signup";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();

  // Hide Navbar for dashboard, login, and signup routes
  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <AuthProvider>
        {!hideNavbar && <Navbar />}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes (any logged-in user) */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Admin Protected Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="users" element={<DashUser />} />
            <Route path="products" element={<DashProduct />} />
            <Route path="orders" element={<DashOrder />} />
          </Route>
        </Routes>
        {!hideNavbar && <Footer />}
      </AuthProvider>
    </div>
  );
}

export default App;
