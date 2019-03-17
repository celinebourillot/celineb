import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu.js";


class Layout extends Component {



  render() {

      return (
          <div>
              <Header
                favicon={this.props.options.favicon_png}
                ga_code={this.props.options.header_code}
                page_url={this.props.options.domain +"/"+this.props.page_url}
                meta_image={this.props.meta_image ? this.props.meta_image.sizes.square_thumb : this.props.options.default_meta_image.sizes.square_thumb}
                meta_title={this.props.meta_title}
                meta_description={this.props.meta_description ? this.props.meta_description : this.props.options.default_meta_description }
              />
              <Menu
              menu={this.props.headerMenu}
              logo={this.props.options.main_logo}
              github={this.props.options.facebook}
              instagram={this.props.options.instagram}
              linkedin={this.props.options.linkedin}
              cta={this.props.options.header_call_to_action}
              pageSlug={this.props.pageSlug}/>

                {this.props.children}

              <Footer
              logo={this.props.options.footer_logo}
              footer_content={this.props.options.footer_content}
              />
          </div>
      );
    }
}

export default Layout;
