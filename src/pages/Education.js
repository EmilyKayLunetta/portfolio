import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import HeroSection from "../components/common/HeroSection";
import ProjectList from "../components/common/ProjectList";

function Education() {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const baseURL = process.env.PUBLIC_URL || "";
        fetch(`${baseURL}/data/lessons.json`)
            .then((res) => res.json())
            .then((data) => setLessons(data))
            .catch((error) => console.error("❌ Error loading lessons:", error));
    }, []);

    if (!lessons.length) return <p>Loading...</p>;

    return (
        <>
            <HeroSection title="Education & Teaching" backgroundImage="/images/education-banner.jpg" />

            <Container sx={{ mt: 5 }}>
                <ProjectList items={lessons} title="Lesson Plans & Teaching Resources" />
            </Container>
        </>
    );
}

export default Education;
