import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import HeroSection from "../components/common/HeroSection";
import AboutSection from "../components/common/AboutSection";

function Contact() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const baseURL = process.env.PUBLIC_URL || "";
        fetch(`${baseURL}/data/users.json`)
            .then((res) => res.json())
            .then((data) => setUser(data[0]))
            .catch((error) => console.error("❌ Error loading user data:", error));
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <>
            <HeroSection title="Get in Touch" backgroundImage="/images/contact-banner.jpg" />

            <Container sx={{ mt: 5 }}>
                <AboutSection profileImage={user.profile_image} bio={user.bio} email={user.email} />

                {/* Google Form for Contact */}
                <Box sx={{ mt: 5, textAlign: "center" }}>
                    <Typography variant="h5" gutterBottom>Send a Message</Typography>
                    <iframe
                        src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                        width="100%"
                        height="600px"
                        style={{ border: "none" }}
                        title="Contact Form"
                    ></iframe>
                </Box>
            </Container>
        </>
    );
}

export default Contact;
