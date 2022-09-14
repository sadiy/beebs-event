import React, { useEffect } from "react";
import Navbar from "../Navbar";
import {
    Paper,
    Grid,
    Box
} from "@mui/material";
import ArticleCover from "../ArticleCover";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchNews } from "../../actions/news";
import { newsSelector, ApiNewsRecord } from "../../slices/news";
import './index.scss';

const Home = () => {
    const dispatch = useAppDispatch();
    const { loading, error, news } = useAppSelector(newsSelector);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    const renderNews = () => {

        if (loading) return (<strong>Loading...</strong>)

        if (error) return (<strong>News not available..</strong>)

        console.log(news.records);

        return news.records ? news.records.map((record: ApiNewsRecord) => (
            (
                <Grid item xs={12} sm={6}>
                    <ArticleCover record={record} />
                </Grid>
            )
        )) : (<strong>News not available..</strong>);
    }

    return (
        <>
            <img src="covers/home-background.jpeg" className="home-cover" alt="Home background" />
            <Box className="home-container">
                <Grid container direction="row" spacing={4} justifyContent="center" alignItems="center">
                    {renderNews()}
                </Grid>
            </Box>
        </>)
}

export default Home;