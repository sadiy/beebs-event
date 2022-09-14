import React from "react";
import {
    Card,
    CardMedia,
    Box,
    Typography,
    CircularProgress
} from "@mui/material";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { ApiNewsRecord } from "../../slices/news";
import './index.scss';

interface Props {
    record: ApiNewsRecord
}

const ArticleCover = ({ record }: Props) => {
    return (
        <Link to={`/news/${record.fields.id}`}>
            <Suspense fallback={<CircularProgress />}>
                <Card sx={{ maxWidth: 500, maxHeight: 300 }} className="article-cover">
                    <CardMedia
                        component="img"
                        alt={record.fields.cover_alt}
                        image={record.fields.cover_url}
                    />
                    <Box className="article-cover-fade">
                        <Typography variant="h6" fontFamily={"Londrina Solid"} className="article-cover-text">
                            {record.fields.title_event ?? record.fields.title}
                        </Typography>
                    </Box>
                </Card>
            </Suspense>
        </Link>
    )
}

export default ArticleCover;