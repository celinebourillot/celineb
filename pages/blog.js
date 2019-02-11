import Layout from "../components/Layout.js";
import React, { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

class Blog extends Component {
    static async getInitialProps(context) {
        const { slug } = context.query;
        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`
        );
        const posts = await postsRes.json();
        return { posts };
    }
    render() {
        if (this.props.posts.length == 0)
            return <Error statusCode={404} />;

        const posts = this.props.posts.map((post, index) => {
            return (
              <div className="column" key={index}>

              <div className="card">
              <Link
                href={`/post?slug=${post.slug}&post_type=post`}
              >
              <div>
                {post.acf.banner_image &&
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={post.acf.banner_image} alt="Placeholder image"/>
                    </figure>
                  </div>
                }
                <div className="card-content">

                  <div className="content">
                    <h4>{post.title.rendered}</h4>
                    {post.acf.intro &&
                      <p>{post.acf.intro}</p>
                    }
                    {post.post_type === "post" &&
                    <Moment format="DD/MM/YYYY">{post.post_date}</Moment>

                    }

                    <button className="button is-primary">Read more</button>

                  </div>

                </div>
                </div>
                </Link>
              </div>
            </div>

            );
        });
        return (
            <Layout headerMenu={this.props.headerMenu} options={this.props.options.acf}>
                <div className="container">
                  <h1>Blog</h1>
                </div>
                <div className="container">
                  <div className="columns">
                    {posts}
                  </div>
                </div>
            </Layout>
        );
    }
}

export default PageWrapper(Blog);
