import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import { Config } from "../config.js";
import { sliceComponentsHelper } from "../helpers/SliceComponentsHelpers";

class Index extends Component {
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/postlight/v1/page?slug=sample-page`
        );
        const page = await pageRes.json();

        return { page };
    }

    render() {

        return (
          <Layout
            headerMenu={this.props.headerMenu}
            options={this.props.options.acf}
            pageSlug={""}
            meta_description={this.props.page.acf.meta_description}
            meta_title={this.props.page.acf.page_title}
            meta_image={this.props.page.acf.image_seo}
            page_url={""}
            >

                {
                    sliceComponentsHelper(this.props.page.acf.flexible_content)
                }

            </Layout>
        );
    }
}

export default PageWrapper(Index);
