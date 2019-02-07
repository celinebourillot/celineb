import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu.js";


class Layout extends Component {

  render() {

      return (
          <div>
              <Header />
              <Menu menu={this.props.headerMenu} logo={this.props.options.main_logo} />
              {this.props.children}
              <Footer />
          </div>
      );
    }
}

export default Layout;
