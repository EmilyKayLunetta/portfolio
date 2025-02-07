import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const educationItems = [
    {
        title: "Creative Lesson Plans",
        image: "/images/lesson-plans.jpg",
        description: "Engaging lesson plans for elementary students that inspire curiosity and creativity."
    },
    {
        title: "Student Art Projects",
        image: "/images/student-art.jpg",
        description: "A collection of student artwork and hands-on projects."
    },
    {
        title: "Interactive Learning",
        image: "/images/interactive.jpg",
        description: "Using technology to enhance classroom engagement and learning outcomes."
    }
];

function Education() {
    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                Education
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Innovative teaching strategies and student-driven projects.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {educationItems.map((item, index) => (
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

export default Education;

