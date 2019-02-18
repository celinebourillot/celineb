import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu.js";


class Layout extends Component {

  render() {

      return (
          <div>
            <Header favicon={this.props.options.favicon_png.length > 0 ? this.props.options.favicon_png : ''}/>
            <Menu
            menu={this.props.headerMenu}
            logo={this.props.options.main_logo}
            cta={this.props.options.header_call_to_action} />
            {this.props.children}
            <Footer />
          </div>
      );
    }
}

export default Layout;
