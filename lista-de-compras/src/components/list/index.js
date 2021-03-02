import React from "react";
import CustomCard from "../CustomCards";
import ListFooter from "../ListFooter";
import ListItem from "../ListItem";
import "./list.css";

import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
  return (
    <CustomCard
      link="/lista"
      containerClass="listContainer"
      footer={<ListFooter total={props.total} />}
    >
      <div>
        <p className="title">{props.list}</p>
        <div className="listCardBody">
          <div className="listCardItem">
            <ListItem icon={faShoppingBasket} text={"1 Item(s) Restantes"} />
          </div>
          <div className="listCardBody">
            <ListItem icon={faCheck} text={"2 Item(s) Comprados"} />
          </div>
        </div>
      </div>
    </CustomCard>
  );
};

export default List;
