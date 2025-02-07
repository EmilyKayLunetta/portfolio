import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const artGallery = [
    {
        title: "Digital Painting",
        image: "/images/digital-art.jpg",
        description: "A collection of digital artwork exploring various themes and techniques."
    },
    {
        title: "Illustrations",
        image: "/images/illustration.jpg",
        description: "Hand-drawn illustrations created using traditional and digital mediums."
    },
    {
        title: "Sketchbook",
        image: "/images/sketchbook.jpg",
        description: "Pages from my sketchbook, showcasing rough ideas and concepts."
    }
];

function Art() {
    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                Artwork Gallery
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                A showcase of digital and traditional artworks.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {artGallery.map((art, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia component="img" height="200" image={art.image} alt={art.title} />
                            <CardContent>
                                <Typography variant="h6">{art.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {art.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Art;
