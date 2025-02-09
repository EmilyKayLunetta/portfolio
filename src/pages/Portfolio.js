import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import HeroSection from "../components/common/HeroSection";
import AboutSection from "../components/common/AboutSection";
import ProjectList from "../components/common/ProjectList";

function Portfolio() {
    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const baseURL = process.env.PUBLIC_URL || "";
        Promise.all([
            fetch(`${baseURL}/data/users.json`).then((res) => res.json()),
            fetch(`${baseURL}/data/projects.json`).then((res) => res.json())
        ])
        .then(([usersData, projectsData]) => {
            if (usersData.length > 0) {
                setUser(usersData[0]);
            }
            setProjects(projectsData);
        })
        .catch((error) => console.error("❌ Error loading data:", error));
    }, []);

    if (!user || !projects.length) return <p>Loading...</p>;

    return (
        <>
            {/* Reusable Hero Section */}
            <HeroSection title={`${user.name}'s Portfolio`} backgroundImage="/images/hero-background.jpg" />

            <Container sx={{ mt: 5 }}>
                {/* Reusable About Section */}
                <AboutSection profileImage={user.profile_image} bio={user.bio} email={user.email} />

                {/* Reusable Project List */}
                <ProjectList items={projects.slice(0, 3)} title="Featured Projects" />
            </Container>
        </>
    );
}

export default Portfolio;
