import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { FaBloggerB } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { FaPowerOff } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient(to right, #64b5f6, #ba68c8)",
          color: "white",
        }}
      >
        <Toolbar className="flex justify-between">
          <NavLink to={"/"}>
            <Typography variant="h6" noWrap component="div">
              My Profile
            </Typography>
          </NavLink>
          <Typography onClick={handleLogOut} variant="h6">
            <FaPowerOff />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
          }}
        >
          <List>
            <NavLink to={"all-projects"}>
              <ListItemButton>
                <ListItemIcon>
                  <GoProjectSymlink />
                </ListItemIcon>
                All projects
              </ListItemButton>
            </NavLink>

            <NavLink to={"add-projects"}>
              <ListItemButton>
                <ListItemIcon>
                  <GoProjectSymlink />
                </ListItemIcon>
                Add projects
              </ListItemButton>
            </NavLink>

            <NavLink to={"add-blogs"}>
              <ListItemButton>
                <ListItemIcon>
                  <FaBloggerB />
                </ListItemIcon>
                Add Blogs
              </ListItemButton>
            </NavLink>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
