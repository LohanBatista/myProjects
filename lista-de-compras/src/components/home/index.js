import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "../list";
import CustomCard from "../CustomCards";
import Newlist from "../NewList";
import "./home.css";

const Home = () => {
  return (
    <div className="pageContainer">
      <Newlist />
      <List />
    </div>
  );
};

export default Home;
