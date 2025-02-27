import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SearchInput from "../InputComonents/SearchInput.jsx";
import LogoutIcon from '@mui/icons-material/Logout';
import Colors from "../../Style/Colors.js";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        alignItems: "center",
        backgroundColor: Colors.BackgroundColor,
      }}
    >
      <Link to="/" style={{ textDecoration:"none", color:Colors.WhiteColor}}>
      <h4 style={{ minWidth: 100, marginRight: "700px" }}>
        Five Minutes Story
      </h4>
      </Link>      

      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "left",
          }}
        >
          <SearchInput />
          <MicNoneIcon sx={{            
            backgroundColor: Colors.WeakBackgroundColor,
            color: Colors.TextColor,
            margin:"7px",
            padding:"2px",
            borderRadius:"5px", 
          }}/>
          <NotificationsNoneIcon sx={{            
            backgroundColor: Colors.WeakBackgroundColor,
            color: Colors.TextColor,
            margin:"7px",
            padding:"2px",
            borderRadius:"5px",    
          }}/>

          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          
          <MenuItem onClick={handleClose}>
            <Link to="/Profile" style={{textDecoration:"none", color:"Black", display:"flex", flexDirection:"row", alignItems:"center"}}>
            <AccountBoxIcon /> My account
            </Link>            
          </MenuItem>
          <Divider />  
          <MenuItem onClick={handleClose}>
            <Link to="/Library" style={{textDecoration:"none", color:"Black", display:"flex", flexDirection:"row", alignItems:"center"}}>
            <LibraryBooksIcon /> My Library
            </Link>            
          </MenuItem>
          <Divider />         
          
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
