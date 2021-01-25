import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const units = ["kilo(s)", "litro(s)", "unidade(s)"];

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: "",
      product: "",
      quantity: "",
      unit: "",
      price: "",
      showErrors: false,
    };
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = () => {
    const { list, product, quantity, unit, price } = this.state;
    if (!list || !product || !quantity || !unit) {
      this.setState({ showErrors: true });
    } else {
      this.props.addProduct({ product, quantity, unit, price }, list);
      this.setState({
        product: "",
        quantity: "",
        unit: "",
        price: "",
        showErrors: false,
      });
    }
  };

  render() {
    return (
      <form className="formContainer">
        <div className="formRow">
          <TextField
            name="list"
            label="Lista"
            value={this.state.list}
            onChange={this.handleChange}
            required
            error={!this.state.list && this.state.showErrors}
          />
          <Button
            onClick={this.handleSubmit}
            variant="outlined"
            color="secondary"
          >
            Adicionar
          </Button>
        </div>
        <div className="formRow">
          <TextField
            name="product"
            label="Produto"
            value={this.state.product}
            onChange={this.handleChange}
            required
            error={!this.state.product && this.state.showErrors}
          />
          <TextField
            name="quantity"
            label="Quantidade"
            value={this.state.quantity}
            onChange={this.handleChange}
            required
            error={!this.state.quantity && this.state.showErrors}
          />
          <TextField
            select
            name="unit"
            label="Unidade"
            value={this.state.unit}
            onChange={this.handleChange}
            required
            error={!this.state.unit && this.state.showErrors}
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
            value={this.state.price}
            onChange={this.handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
          />
        </div>
      </form>
    );
  }
}
export default Form;
