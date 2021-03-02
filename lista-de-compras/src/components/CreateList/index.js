import React, { Component } from "react";
import Form from "../Form";
import CRListItem from "../CreateList-ListItem";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ListActions } from "../../ducks/list";

import "./list.css";

class CreateList extends Component {
  addProduct = (product, list) => {
    this.props.addProduct(product, list);
  };
  render() {
    return (
      <div className="pageContainer">
        <Form addProduct={this.addProduct} />
        <div className="listItemContainer">
          {this.props.list.items.map((item) => (
            <CRListItem
              item={item}
              key={item.id}
              deleteProduct={this.props.deleteProduct}
            />
          ))}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (list) => {
//   return {
//     list: list.list,
//   };
// };
const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
