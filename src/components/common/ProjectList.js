import React from "react";
import { Grid2 as Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

function ProjectList({ items, title }) {
    return (
        <>
            <Typography variant="h4" align="center" sx={{ mt: 5 }}>
                {title}
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {items.map((item) => (
                    <Grid key={item.id} xs={12} sm={6} md={4}>
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
        </>
    );
}

export default ProjectList;
