import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import HeroSection from "../components/common/HeroSection";
import ProjectList from "../components/common/ProjectList";

function Art() {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const baseURL = process.env.PUBLIC_URL || "";
        fetch(`${baseURL}/data/artworks.json`)
            .then((res) => res.json())
            .then((data) => setArtworks(data))
            .catch((error) => console.error("❌ Error loading artworks:", error));
    }, []);

    if (!artworks.length) return <p>Loading...</p>;

    return (
        <>
            <HeroSection title="Art & Creativity" backgroundImage="/images/art-banner.jpg" />

            <Container sx={{ mt: 5 }}>
                <ProjectList items={artworks} title="Artwork Showcase" />
            </Container>
        </>
    );
}

export default Art;
