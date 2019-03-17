import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import {withRouter} from 'next/router'
import PageWrapper from "../components/PageWrapper.js";
import { Config } from "../config.js";
import { sliceComponentsHelper } from "../helpers/SliceComponentsHelpers";
import DefaultHero from "../components/DefaultHero.js";

class Project extends Component {
    static async getInitialProps(context) {
        const { slug } = context.query;

        const res = await fetch(
            `${Config.apiUrl}/wp/v2/project?slug=${slug}`
        );
        const post = await res.json();
        return { post };

    }

    render() {
        if (!this.props.post[0].title) return <Error statusCode={404} />;


        return (
          <Layout
            headerMenu={this.props.headerMenu}
            options={this.props.options.acf}
            pageSlug={this.props.post[0].slug}
            meta_description={this.props.post[0].acf.meta_description}
            meta_title={this.props.post[0].acf.page_title}
            meta_image={this.props.post[0].acf.image_seo}
            page_url={this.props.post[0].slug}
            >

          {!this.props.post[0].acf.hide_and_use_hero_block_instead &&
            <DefaultHero
            title={this.props.post[0].acf.page_title}
            intro={this.props.post[0].acf.intro}

          />}

              {this.props.post[0].acf.flexible_content &&
                  sliceComponentsHelper(this.props.post[0].acf.flexible_content)
              }

          </Layout>
        );
    }
}

export default PageWrapper(Project);
