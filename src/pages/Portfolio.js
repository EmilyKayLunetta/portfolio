import React from 'react';
import { Typography, Container, Grid2 as Grid, Card, CardMedia, CardContent } from "@mui/material";

const portfolioItems = [
    {
        title: "Illustration Work",
        image: "/images/art1.jpg",
        description: "A collection of hand-drawn and digital illustrations."
    },
    {
        title: "Lesson Plans",
        image: "/images/lesson-plans.jpg",
        description: "Innovative lesson plans designed for elementary education."
    },
    {
        title: "Student Projects",
        image: "/images/student-projects.jpg",
        description: "Creative projects completed by students in the classroom."
    }
];

function Portfolio() {
    return (
        <Container>
            {/* Hero Section */}
            <Typography variant="h2" align="center" gutterBottom>
                Welcome to My Portfolio
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Blending education and art to create inspiring learning experiences.
            </Typography>

            {/* Portfolio Showcase */}
            <Grid container spacing={4} justifyContent="center">
                {portfolioItems.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia component="img" height="200" image={item.image} alt={item.title} />
                            <CardContent>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Portfolio;
