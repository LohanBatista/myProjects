import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const CRListItemFooter = (props) => {
  return (
    <div className="listCardFooter">
      <div className="listCardFooterActions">
        <FontAwesomeIcon icon={faPen} color="#282828" size="1x" />
        <FontAwesomeIcon
          onClick={() => props.deleteProduct(props.item.id)}
          icon={faTrash}
          color="#282828"
          size="1x"
        />
      </div>
      <p>Total R$ {props.item.total}</p>
    </div>
  );
};

export default CRListItemFooter;
