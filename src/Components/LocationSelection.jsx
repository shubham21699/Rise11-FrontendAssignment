import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import lasVegas from "../Images/lasvegas.webp";
import losAngelas from "../Images/losAngelas.webp";
import NYCity from "../Images/NYcity.webp";
import India from "../Images/india.jpg";
import { Grid } from "@mui/material";

export default function LocationSelection() {
  const data = [
    { place: "LAS VEGAS", shortform: "NV (LAS)", imageName: lasVegas },
    { place: "LOS ANGELAS", shortform: "CA (LAX)", imageName: losAngelas },
    { place: "NEW YORK CITY", shortform: "NY (NYC)", imageName: NYCity },
    { place: "INDIA", shortform: "IN (IND)", imageName: India },
  ];

  return (
    <div style={{ margin: "2rem" }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((elem) => (
          <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={elem.imageName}
                title={elem.place}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elem.place}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {elem.shortform}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Flights From {elem.place} {<ArrowForwardIcon />}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
