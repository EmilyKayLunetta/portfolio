import React from "react";
import { Grid2 as Grid, CardMedia, Typography, Box } from "@mui/material";

function AboutSection({ profileImage, bio }) {
    return (
        <Grid container spacing={4} alignItems="center">
            <Grid item size={{xs: 12, sm:4}}>
                <CardMedia
                    component="img"
                    height="500"
                    image={profileImage || "/assets/images/emily.jpg"}
                    alt="Profile Picture"
                    sx={{ borderRadius: "10px" }}
                />
            </Grid>
            <Grid item size={{xs: 12, sm: 8}} sx={{ display: 'flex', alignItems: 'center', height: '500px' }}>
                <Box sx={{ backgroundColor: "#393939", color: "#f4f2f2", padding: 2, borderRadius: "10px", width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <Typography variant="h3" gutterBottom>
                        About Me
                    </Typography>
                    <Typography variant="body1" component="p">
                        {bio || "Biography not available."}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default AboutSection;
