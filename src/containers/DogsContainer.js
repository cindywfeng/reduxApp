import React from 'react';
import { connect } from "react-redux";

class DogsContainer extends React.Component {
  render() {
    // {
    //   /* Thanks to mSTP, we can now access a prop called 'allCats' which hold the value of 'all' from our reducer */
    // }
    return (
      <ul>
        {" "}
        {this.props.allDogs.map((d) => (
          <li>{d.name}</li>
        ))}{" "}
      </ul>
    );
  }
}

// Note this is defined outside the class
// Bear in mind if you have more than one reducer you will need to go via that layer eg. state.cats.all
const mSTP = (state) => ({ allDogs: state.all });

export default connect(mSTP)(DogsContainer);
