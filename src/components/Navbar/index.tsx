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
        <AppBar elevation={0} position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h3" fontFamily={"Lobster"} className="logoTitle" data-text="Que faire à Paris ?">
                    <a href="/">Que faire à Paris ?</a>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;