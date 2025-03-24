import React from "react";
import { Grid2 as Grid, CardMedia, Typography } from "@mui/material";

function AboutSection({ profileImage, bio, email }) {
    return (
        <>
            <Typography variant="h4" align="center" gutterBottom>
                About Me
            </Typography>
            <Grid container spacing={4} alignItems="center">
                <Grid xs={12} sm={4}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={profileImage || "/assets/images/emily.jpg"}
                        alt="Profile Picture"
                        sx={{ borderRadius: "10px" }}
                    />
                </Grid>
                <Grid xs={12} sm={8}>
                    <Typography variant="body1" paragraph>
                        {bio || "Biography not available."}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Contact: {email || "No contact info available."}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default AboutSection;
