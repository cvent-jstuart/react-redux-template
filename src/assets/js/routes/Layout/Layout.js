import React from "react";
import { connect } from "react-redux";

import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

require("./layout.less");

class Layout extends React.Component {
  render() {

    const { dispatch, user } = this.props;

    return (
      <div className="layout">
        <div className="layout-container">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    )
  }
}

const connectItems = (state) => {
  return {
    user: state.user
  }
};

export default connect(connectItems)(Layout);
