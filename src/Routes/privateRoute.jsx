import { Route, Navigate } from "react-router-dom";
import Dashboard from "../Layout/admin/Dashboard";
import axios from "axios";

const apiUrl = "http://localhost:3002/users"; 

const isAuthenticated = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return false;

    const response = await axios.get(`${apiUrl}/auth/validate`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.valid;
  } catch (error) {
    return false;
  }
};
export const PrivateRoute = () => (
  <>
      <Route
        path="/dashboard"
        render={() =>
          isAuthenticated()? (
            <Dashboard />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
  </>
);