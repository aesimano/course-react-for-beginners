import React from "react";
import PropTypes from "prop-types";

const Header = props => (
  <header className="top">
    <h1>
      Dre
      <span className="ofThe">
        <span className="of">Is</span>
        <span className="the" />
      </span>
      Gay
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

// Header is a stateless functional component, so we need to do it after the fact like this: 
Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Dre
//           <span className="ofThe">
//             <span className="of">Is</span>
//             <span className="the" />
//           </span>
//           Gay
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;
