import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Colors from "../../Style/Colors";
import "../../Style/NavBar.css";
import { Link } from "react-router-dom";

export default function SearchInput() {
  return (
    <Box sx={{
        backgroundColor: Colors.WeakBackgroundColor,
        color: Colors.TextColor,
        borderRadius: "5px",
      }}>
      <TextField        
        id="input-with-icon-textfield"
        placeholder="Search"
        sx={{
          '& .MuiInputBase-input::placeholder': {
            
              color: Colors.TextColor,
              opacity: 1,
          },
          '& .MuiInputBase-input': {
            backgroundColor: Colors.WeakBackgroundColor,
            color: Colors.TextColor,
            opacity: 1,
          },
      }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start"  >
            <Link to="/Search">
            <SearchIcon sx={{
                color: Colors.TextColor,   
                marginLeft:"10px"             
              }}/>
            </Link>
              
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
}
