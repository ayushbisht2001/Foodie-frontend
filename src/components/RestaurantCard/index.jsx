import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import TapasIcon from "@mui/icons-material/Tapas";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CloseIcon from "@mui/icons-material/Close";
import { Box, height } from "@mui/system";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import GoogleMap from "../map/GoogleMap";

const colors = [
  "red",
  "blue",
  "black",
  "yellow",
  "pink",
  "green",
  "pink",
  "blue",
];

const Icons = (props, rand) => {
  const add = {
    ...props,
    sx: {
      transform: "scale(6)",
      margin: "auto",
      position: "relative",
      opacity: "0.15",
      color: colors[rand],
    },
  };

  const icons = [
    <EmojiFoodBeverageIcon {...add} />,
    <FastfoodIcon {...add} />,
    <FoodBankIcon {...add} />,
    <DinnerDiningIcon {...add} />,
    <IcecreamIcon {...add} />,
    <LocalDiningIcon {...add} />,
    <BrunchDiningIcon {...add} />,
    <TapasIcon {...add} />,
  ];

  return icons[rand];
};



export default function Index(props) {
  const keyMapper = {
    has_table: ["Table booking available", " Table booking not available"],
    has_online: ["Online booking available", " Online booking not available"],
  };

  const {
    data: { name, cuisines, features, rating, votes },
  } = props;
  const [theme, setTheme] = useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const rand = Math.floor(Math.random() * 8);
    setTheme(rand);

    console.log("props", props, features);
  }, []);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 400,
          padding: "10px",
          position: "relative",
          borderBottom: `3px solid ${colors[theme]}`,
          boxShadow: "2px 2px 10px #e2e3e4c5",
          cursor : "pointer"
        }}
        onClick={handleClickOpen}
      >
        <Box
          sx={{
            width: 200,
            height: 200,
            position: "absolute",
            margin: "auto",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: 200,
              height: 200,
              display: "flex",
              placeItems: "center",
            }}
          >
            {Icons(3, theme)}
          </Box>

        </Box>
        <Box
        sx = {{
          display : "flex",
          alignItems : "flex-start",
          width : "100%",

        }}>
        <strong className="text-dark font-weight-bold  m-2" style={{ fontSize: "1.6rem" }}>
          {name}
        </strong>
        </Box>
         

        <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "auto",
              display: "flex",
              placeItems: "center",
              margin : "5px 2px"
            }}
          >
             <Rating
          name="read-only"
          className=""
          value={rating.points}
          sx = {{
            color : rating.color
          }}
          readOnly
        />
        <Typography className="d-inline" sx = {{ color : rating.color }} >
          {" "}
           {rating.text} 
        </Typography>
          </Box>
       

        <Typography className="text-primary m-2">
          {props.data.avg_cost}&nbsp;{props.data.currency}
        </Typography>

        <CardContent>
          {features &&
            Object.keys(features).map((val, index) => (
              <Typography color={features[val] ? "#28a745" : "#dc3545"}>
                {features[val] ? (
                  <>
                    {" "}
                    <DoneAllIcon /> {keyMapper[val][0]}{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <CloseIcon /> {keyMapper[val][1]}{" "}
                  </>
                )}
              </Typography>
            ))}
        </CardContent>
        <CardActions disableSpacing>
          <div className="d-flex flex-wrap my-3">
            {cuisines.map((val) => (
              <p className="badge mx-1" style={{ background: colors[theme] }}>
                {val.title}
              </p>
            ))}
          </div>
        </CardActions>

        <Typography className="text-muted  text-right m-2">
          {props.data.votes} Votes
        </Typography>
      </Card>

      <Dialog
        open={open}
        maxWidth="800px"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "auto",
              display: "flex",
              placeItems: "center",
              margin : "5px 2px"
            }}
          >
              
          {name}
          <Rating
          name="read-only"
          className=""
          value={rating.points}
          sx = {{
            color : rating.color
          }}
          readOnly
        />
        </Box>

        </DialogTitle>
        <DialogContent>
<GoogleMap lng = {props.data.address.longitude} lat = {props.data.address.latitude} text = {name} />
         
        </DialogContent>
      </Dialog>
    </>
  );
}


