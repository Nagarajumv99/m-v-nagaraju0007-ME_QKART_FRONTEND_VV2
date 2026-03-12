import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
    const history = useHistory();
    const username = localStorage.getItem("username");
    const handleLogout = () => {
      localStorage.clear();
      history.push("/");
      window.location.reload();
    }
    const login = () => {
      history.push("/login");
    }
    const register = () => {
      history.push("/register");
    }
    const handleBack = () => {
      history.push("/");
    }
    if(hasHiddenAuthButtons){
      return (
        <Stack>
        <Box className="header">
          <Box className="header-title">
              <img src="logo_light.svg" alt="QKart-icon"></img>
          </Box>
          {/* <Avatar /> */}
          <Button
            className="explore-button"
            startIcon={<ArrowBackIcon />}
            variant="text"
            onClick={handleBack}
          >
            Back to explore
          </Button>
        </Box>
        </Stack>
      );
    }
    else {
      return (
        <Box className="header">
          {username ? (
            <Box 
              display="flex" 
              alignItems="center" 
              justifyContent="space-between"
              sx={{ gap: 2, width:"100%" }}
            >
              <Box className="header-title">
                <img src="logo_light.svg" alt="QKart-icon" />
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar />
                <Button variant="text" className="user-button">{username}</Button>
                <Button variant="text" className="explore-button" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            </Box>
            ) : (
            <>
              <Box className="header-title">
                <img src="logo_light.svg" alt="QKart-icon" />
              </Box>
              {/* <Avatar /> */}
              <Box>
                <Button variant="text" className="explore-button" onClick={login}>
                  Login
                </Button>
                <Button className="button" variant="contained" onClick={register}>
                  Register
                </Button>
              </Box>
            </>
          )}
        </Box>
      );
    }
};

export default Header;
