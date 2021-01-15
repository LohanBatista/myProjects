import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

const ListItem = (props) => {
  return (
    <div className="listCardItem">
      <FontAwesomeIcon className="icon" icon={props.icon} size="sm" />
      <p>{props.text}</p>
    </div>
  );
};

export default ListItem;
