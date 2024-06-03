import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Box, CircularProgress } from "@mui/material";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/"></Navigate>;
};

export default PrivateRoute;
