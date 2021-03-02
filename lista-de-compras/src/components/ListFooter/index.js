import React from "react";

const ListFooter = (props) => {
  return (
    <div className="listFooter">
      <p>13/01/2021</p>
      <p style={{ paddingRight: 15 }}>R${props.total}</p>
    </div>
  );
};

export default ListFooter;
