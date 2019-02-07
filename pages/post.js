import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import { Config } from "../config.js";
import { sliceComponentsHelper } from "../helpers/SliceComponentsHelpers";

class Post extends Component {
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        const res = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
        );
        const post = await res.json();
        return { post };
    }

    render() {
        if (!this.props.post.title) return <Error statusCode={404} />;

        return (
          <Layout headerMenu={this.props.headerMenu} options={this.props.options.acf}>

              {this.props.post.acf.flexible_content &&
                  sliceComponentsHelper(this.props.post.acf.flexible_content)
              }

          </Layout>
        );
    }
}

export default PageWrapper(Post);
