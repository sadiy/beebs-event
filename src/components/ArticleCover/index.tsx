import React from "react";
import {
    Card,
    CardMedia,
    Box,
    Typography
} from "@mui/material";
import './index.scss';

const ArticleCover = (props: any) => {
    return (
        <Card sx={{ maxWidth: 500 }} className="article-cover">
            <CardMedia
                component="img"
                alt="vestiaire"
                image="https://cdn.paris.fr/qfapv4/2021/11/19/huge-2fbe0719e8a334a12114b76b2bb93cbc.jpg"
            />
            <Box className="article-cover-fade">
                <Typography variant="h6" fontFamily={"Londrina Solid"} className="article-cover-text">
                    Visite de Paris en trottinette et chasse au trésor !
                </Typography>
            </Box>
        </Card>
    )
}

export default ArticleCover;