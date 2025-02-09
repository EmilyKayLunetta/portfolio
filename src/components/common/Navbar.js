import React, { useState } from "react";
import { Typography, Toolbar, AppBar, Box, IconButton, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from "./DrawerMenu";

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <DrawerMenu toggleDrawer={toggleDrawer} />
                    </Drawer>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Emily Lunetta • Educator & Artist
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;