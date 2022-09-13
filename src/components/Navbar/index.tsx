import React from "react";
import { 
    AppBar, 
    Toolbar, 
    IconButton 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = (props: any) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;