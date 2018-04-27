import React from "react";
import PropTypes from "prop-types";
// import { formatPrice } from "../helpers";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };

  handleChange = event => {
    // update that fish
    // 1. take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const { image, name, desc, status, price } = this.props.fish;
    // const price = formatPrice(this.props.fish.price);
    // const isAvailable = status === "available";

    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={desc} />
        {/* <img src={image} alt={name} /> */}
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
