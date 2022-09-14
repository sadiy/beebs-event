import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import './index.scss';

interface DetailsProps {
    title: string;
    cover_url: string;
    content: string;
}

const NewsDetails = ({ title, cover_url, content }: DetailsProps) => {
    return (
        <Box className="news-details">
            <Typography variant="h5" fontFamily={"Londrina Solid"}>
                {title}
            </Typography>
            <img src={cover_url} className="news-details-cover" alt="Home background" />
            <div dangerouslySetInnerHTML={{ __html: content}} />
        </Box>
    )
}

export default NewsDetails;