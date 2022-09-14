import React, { useEffect } from "react";
import {
    Grid,
    Box,
    Pagination
} from "@mui/material";
import ArticleCover from "../ArticleCover";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchNews } from "../../actions/news";
import { newsSelector, ApiNewsRecord } from "../../slices/news";
import './index.scss';

const Home = () => {
    const dispatch = useAppDispatch();
    const { loading, error, news } = useAppSelector(newsSelector);

    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        dispatch(fetchNews(page-1));
    }, [dispatch, page]);

    const renderNews = () => {
        if (loading) return (<strong>Loading...</strong>)

        if (error) return (<strong>News not available..</strong>)

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
                    <Pagination count={10} page={page} onChange={handleChange} style={{marginTop: "20px"}} />
                </Grid>
            </Box>
        </>)
}

export default Home;