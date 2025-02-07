import React from "react";
import { Container, Typography, Box } from "@mui/material";

function Contact() {
    return (
        <Container maxWidth="md">
            <Typography variant="h2" align="center" gutterBottom>
                Contact Me
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Fill out the form below, and I’ll get back to you as soon as possible!
            </Typography>

            {/* Embedding the Google Form */}
            <Box sx={{ mt: 3 }}>
                <iframe
                    src="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true"
                    width="100%"
                    height="600px"
                    frameBorder="0"
                >
                    Loading…
                </iframe>
            </Box>
        </Container>
    );
}

export default Contact;
