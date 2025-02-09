import React from "react";
import { Box, Typography } from "@mui/material";

function HeroSection({ title, backgroundImage }) {
    return (
        <Box
            sx={{
                height: "300px",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Typography
                variant="h2"
                color="white"
                sx={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                    padding: "10px 20px",
                    borderRadius: "10px"
                }}
            >
                {title}
            </Typography>
        </Box>
    );
}

export default HeroSection;
