import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./ServiceHome.css";

const ServiceHome = (props) => {
  const { title, img, description, fee } = props.serviceHome;
  return (
    <div className="card-container">
      <Card className="card">
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {fee}
        </Typography>
        <Button variant="contained">Enroll Now</Button>
      </Card>
    </div>
  );
};

export default ServiceHome;
