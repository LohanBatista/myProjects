import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" color="secondary">
      <div className="header">
        <Link to="/">
          <p className="title textLeft">Lista de Compras</p>
        </Link>
      </div>
    </AppBar>
  );
};

export default Header;
