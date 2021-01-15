import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";

const units = ["kg", "lt", "un"];

const CreateList = () => {
  return (
    <div className="pageContainer">
      <form className="form-container">
        <TextField
          name="list"
          label="Lista"
          value={""}
          onChange={() => {}}
          required
        />
        <TextField
          name="product"
          label="Produto"
          value={""}
          onChange={() => {}}
          required
        />
        <TextField
          name="quantity"
          label="Quantidade"
          value={""}
          onChange={() => {}}
          required
        />
        <TextField
          select
          name="unity"
          label="Unidade"
          value={""}
          onChange={() => {}}
          required
        >
          {units.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="price"
          label="Preço"
          value={""}
          onChange={() => {}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
};

export default CreateList;
