import React from "react";
import { Box, Typography, useTheme, Container } from "@mui/material";

function HeroSection({ title, backgroundImage }) {
    const theme = useTheme(); // Access the theme

    return (
        <Box
            sx={{
                marginTop: "64px", // Ensure content is below the fixed navbar
                padding: "64px 0", // Add vertical padding
                // height: "300px",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Container
                maxWidth="lg" // Ensure max width is 1200px at min-width 1200px
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Typography
                    variant="h2"
                    color={theme.palette.primary.contrastText} // Use theme's primary contrast text color
                    sx={{
                        backgroundColor: theme.palette.primary.main, // Use theme's primary main color
                        padding: "10px 20px",
                        borderRadius: "100px",
                        width: "100%", // Ensure Typography stretches with the container
                        textAlign: "center", // Center the text
                        fontWeight: "bold", // Bold the title text
                        textTransform: "uppercase" // Uppercase the title text
                    }}
                >
                    {title}
                </Typography>
            </Container>
        </Box>
    );
}

export default HeroSection;
