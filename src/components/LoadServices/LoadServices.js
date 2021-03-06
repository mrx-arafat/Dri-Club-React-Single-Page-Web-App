import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

import "./LoadServices.css";
// all data are showing for services page
const LoadServices = (props) => {
  const { title, img, description, fee } = props.sv;
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
        <Button
          style={{
            borderRadius: 35,
            backgroundColor: "#FDAB10",

            fontSize: "18px",
          }}
          variant="contained"
        >
          Enroll Now
        </Button>
      </Card>
    </div>
  );
};

export default LoadServices;
