import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchNewsDetails } from "../../actions/news";
import { newsSelector, ApiNewsRecord } from "../../slices/news";
import NewsDetails from "../NewsDetails";
import { useParams } from "react-router-dom";
import './index.scss';

const News = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { loading, error, news } = useAppSelector(newsSelector);

    useEffect(() => {
        dispatch(fetchNewsDetails(params.newsId!));
    }, [dispatch, params.newsId]);

    const renderNews = () => {
        if (loading) return (<strong>Loading...</strong>)

        if (error) return (<strong>News not available..</strong>)

        return news.records ? news.records.map((record: ApiNewsRecord) => (
            (
                <NewsDetails
                    title={record.fields.title_event ?? record.fields.title}
                    cover_url={record.fields.cover_url}
                    content={record.fields.description}
                />
            )
        )) : (<strong>News not available..</strong>);
    }

    return (
        <Paper elevation={1} className="news-container">
            {renderNews()}
        </Paper>
    )
}

export default News;