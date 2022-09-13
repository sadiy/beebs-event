import React from "react";
import {
    Card,
    CardMedia,
    CardContent
} from "@mui/material";

const ArticleCover = (props: any) => {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                component="img"
                alt="vestiaire"
                image="https://cdn.paris.fr/qfapv4/2021/11/19/huge-2fbe0719e8a334a12114b76b2bb93cbc.jpg"
            />
        </Card>
    )
}

export default ArticleCover;