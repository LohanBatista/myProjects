import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./CustomCard.css";
import { Link } from "react-router-dom";

const CustomCard = (props) => {
  return (
    <div className={props.containerClass}>
      <Link to={props.link}>
        <Card className="card">
          <CardActionArea className="cardActionArea">
            {props.image && (
              <CardMedia
                component="img"
                className="cardImg"
                height="100"
                image={props.image}
                title="image"
              />
            )}
            <CardContent className="cardContent">{props.children}</CardContent>
          </CardActionArea>
          {props.footer && (
            <>
              <Divider />
              <CardActions className="cardFooter">{props.footer}</CardActions>
            </>
          )}
        </Card>
      </Link>
    </div>
  );
};

export default CustomCard;
