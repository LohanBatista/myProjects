import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "../list";
import { getListTotal } from "../../ducks/list.reducer";
import CustomCard from "../CustomCards";
import Newlist from "../NewList";

import "./home.css";

const Home = (props) => {
  return (
    <div className="pageContainer">
      <Newlist />
      {props.list.items.length > 0 && (
        <List list={props.list.list} total={props.total} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
  total: getListTotal(state),
});

export default connect(mapStateToProps, null)(Home);
