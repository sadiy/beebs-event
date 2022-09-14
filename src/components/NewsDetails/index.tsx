import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import './index.scss';

interface DetailsProps {
    title: string;
    cover_alt: string;
    address_name?: string;
    address_street?: string;
    address_city?: string;
    address_zipcode?: string;
    cover_url: string;
    content: string;
}

const NewsDetails = ({ title, cover_url, cover_alt, address_name, address_city, address_street, address_zipcode, content }: DetailsProps) => {
    return (
        <Box className="news-details">
            <Typography variant="h5" fontFamily={"Londrina Solid"}>
                {title}
            </Typography>
            <img src={cover_url} className="news-details-cover" alt={cover_alt ?? "News cover"} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {address_name &&
                <h4>
                    📍 {address_name}
                    <br />{address_street},{address_zipcode} {address_city}
                </h4>
            }
        </Box>
    )
}

export default NewsDetails;