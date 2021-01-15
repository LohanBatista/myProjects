import React from "react";
import CustomCard from "../CustomCards";

const NewList = () => {
  return (
    <CustomCard link="/lista" containerClass="newListContainer">
      <div>
        <p className="title">Adicionar novas listas!</p>
      </div>
    </CustomCard>
  );
};

export default NewList;
