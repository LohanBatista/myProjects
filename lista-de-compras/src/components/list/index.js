import React from "react";
import CustomCard from "../CustomCards";
import ListFooter from "../ListFooter";
import ListItem from "../ListItem";
import "./list.css";

import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  return (
    <CustomCard
      link="/lista"
      containerClass="listContainer"
      footer={<ListFooter />}
    >
      <div>
        <p className="title">Mês</p>
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
