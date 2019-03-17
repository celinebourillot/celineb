import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { Config } from "../config.js";
import stylesheet from '../src/styles/style.scss'

class Header extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Ubuntu:700|Muli:400,800" rel="stylesheet"/>
                    <style src="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"/>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />

                    //GA Code
                    <div
                        dangerouslySetInnerHTML={{
                            __html: this.props.ga_code
                        }}
                    />

                    <link rel="shortcut icon" type="image/png" href={this.props.favicon}/>
                    <title>
                        {this.props.meta_title} - Celine B
                    </title>
                    <meta name="description" content={this.props.meta_description}/>
                    <meta property="og:title" content={this.props.meta_title}/>
                    <meta property="og:description" content={this.props.meta_description}/>
                    <meta property="og:image" content={this.props.meta_image}/>
                    <meta property="og:url" content={this.props.page_url}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                </Head>
            </div>
        );
    }
}

export default Header;
