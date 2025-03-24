import React, { useState } from "react";
import { Grid2 as Grid, Card, CardMedia, CardContent, Typography, Dialog, DialogContent } from "@mui/material";

function ProjectList({ items, title }) {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleClickOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage("");
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }} onClick={() => handleClickOpen(item.image)}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={item.image}
                                alt={item.title}
                                style={{ objectFit: "cover", cursor: "pointer" }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={open} onClose={handleClose} maxWidth="md">
                <DialogContent>
                    <img src={selectedImage} alt="Expanded view" style={{ width: "100%" }} />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ProjectList;
