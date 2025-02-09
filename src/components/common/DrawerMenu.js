import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import BrushIcon from '@mui/icons-material/Brush';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function DrawerMenu({ toggleDrawer }) {
    return (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/portfolio">
                        <ListItemIcon><WorkIcon /></ListItemIcon>
                        <ListItemText primary="Portfolio" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/portfolio/education">
                        <ListItemIcon><SchoolIcon /></ListItemIcon>
                        <ListItemText primary="Education" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/portfolio/art">
                        <ListItemIcon><BrushIcon /></ListItemIcon>
                        <ListItemText primary="Art" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/portfolio/contact">
                        <ListItemIcon><ContactMailIcon /></ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );
}

export default DrawerMenu;