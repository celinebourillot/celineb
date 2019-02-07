import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

class Property extends Component {
  static async getInitialProps(context) {
      const { slug } = context.query;
      const res = await fetch(
          `${Config.apiUrl}/wp-json/wp/v2/property/821`
      );
      const property = await res.json();
      return { property };
  }


    render() {


        return (
            <Layout>
                <Menu menu={this.props.headerMenu} />
                <h1>{this.props.property.type}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: this.props.property.content.rendered
                    }}
                />
            </Layout>
        );
    }
}

export default PageWrapper(Property);
