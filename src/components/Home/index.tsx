import React from "react";
import Navbar from "../Navbar";
import {
    Paper,
    Grid,
    Box
} from "@mui/material";
import ArticleCover from "../ArticleCover";
import './index.scss';

const Home = () => {
    return (
        <>
            <Paper elevation={0}>
                <Navbar />
                <img src="covers/home-background.jpeg" className="home-cover" alt="Home background" />
                <Box className="home-container">
                    <Grid container direction="row" spacing={4} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <ArticleCover />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ArticleCover />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ArticleCover />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ArticleCover />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>)
}

export default Home;