import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import './index.scss';

const Navbar = (props: any) => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h3" fontFamily={"Lobster"} className="logoTitle" data-text="Que faire à Paris ?">
                    Que faire à Paris ?
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;