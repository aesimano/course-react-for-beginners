import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    // stop form from submitting
    event.preventDefault();
    // get text from that input
    const storeName = this.myInput.value.value;
    // change the page to /store/whatever-was-entered
    this.props.history.push(`/store/${storeName}`);
  };

  componentDidMount() {
    console.log("Mounted!!");
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* some comment */}
        <h2>Please Enter A Store</h2>

        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store &#8594;</button>
      </form>
    );
  }
}

export default StorePicker;
