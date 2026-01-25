import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CustomerDashboard from "./customer/CustomerDashboard";
import SupplierDashboard from "./supplier/SupplierDashboard";
import StaffDashboard from "./staff/StaffDashboard";
import ManagerDashboard from "./manager/ManagerDashboard";
import OwnerDashboard from "./owner/OwnerDashboard";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";

export default function App() {
  // For testing: change this value to "customer", "staff", "supplier", "manager", "owner"
  const role = "owner"; 

  // Redirect logic based on role after login
  const getDashboard = () => {
    switch (role) {
      case "customer":
        return <CustomerDashboard />;
      case "staff":
        return <StaffDashboard />;
      case "supplier":
        return <SupplierDashboard />;
      case "manager":
        return <ManagerDashboard />;
      case "owner":
        return <OwnerDashboard />;
      default:
        return <Navigate to="/login" />; // if no role, go to login
    }
  };

  return (
    <Router>
      <Routes>
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={getDashboard()} />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
