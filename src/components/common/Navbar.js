import React from "react";
import { Typography, Toolbar, AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                <Button color="inherit" component={Link} to="/portfolio">
                    Portfolio
                </Button>
                <Button color="inherit" component={Link} to="/portfolio/education">
                    Education
                </Button>
                <Button color="inherit" component={Link} to="/portfolio/art">
                    Art
                </Button>
                <Button color="inherit" component={Link} to="/portfolio/contact">
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
