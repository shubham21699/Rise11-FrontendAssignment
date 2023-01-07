import { React, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { MenuItem } from "@mui/material";
import Logo from "../Images/Logo.png";
import Header from "./Hamburger";

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 1170) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem />
          </IconButton>
          {screenSize < 1170 && <Header />}
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="Logo" style={{ width: "10rem" }} />
          </Typography>
          {screenSize > 650 && (
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit">BOOK</Button>
              <Button color="inherit">CHECK IN</Button>
              <Button color="inherit">MANAGE</Button>
            </Typography>
          )}
          {activeMenu && (
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit">Deals</Button>
              <Button color="inherit">Flying With Us</Button>
              <Button color="inherit">Where We Fly</Button>
              <Button color="inherit">Shop</Button>
              <Button color="inherit">FAQ</Button>
              <Button color="inherit">Fees</Button>
            </Typography>
          )}
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">Sign In</Button>
            {screenSize > 400 && <Button color="inherit">Sign Up</Button>}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
