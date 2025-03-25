import React, { useState, useEffect } from "react";
import { Grid2 as Grid, Typography, Box, Button, useTheme } from "@mui/material";
import CyclingPhrases from "../components/CyclingPhrases";
import { Link } from "react-router-dom";

function Portfolio() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const baseURL = process.env.PUBLIC_URL || "";
    Promise.all([
      fetch(`${baseURL}/data/users.json`).then((res) => res.json()),
      fetch(`${baseURL}/data/projects.json`).then((res) => res.json()),
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
    <Grid container style={{ height: "100vh", overflow: "hidden" }}>
      {/* Left: Profile Image */}
      <Grid
        size={{ xs: 12, md: 6 }}
        style={{
          backgroundImage: `url(${user.profile_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Right: Name, Typewriter, Links */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          px: 4,
          textAlign: "center",
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* Top bar */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "64px",
            backgroundColor: theme.palette.primary.main,
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            zIndex: 1,
          }}
        />

        {/* Main Content */}
        <Box sx={{ animation: 'fadeIn 1.2s ease-out' }}>
          <Typography variant="h1" gutterBottom>
            {user.name}
          </Typography>

          <CyclingPhrases />

          <Box sx={{ display: 'flex', gap: 4, mt: 4, justifyContent: 'center' }}>
            <Button component={Link} to="/portfolio/education" variant="contained" color="primary">
              Education
            </Button>
            <Button component={Link} to="/portfolio/art" variant="contained" color="primary">
              Art
            </Button>
            <Button component={Link} to="/portfolio/contact" variant="contained" color="primary">
              Contact
            </Button>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "64px",
            backgroundColor: theme.palette.primary.main,
            boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
            zIndex: 1,
          }}
        />
      </Grid>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Grid>
  );
}

export default Portfolio;
