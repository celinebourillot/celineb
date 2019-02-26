import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";

import Button from './Button.js';

class Menu extends Component {
  constructor() {
      super();
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
       const menuItems = this.props.menu.items.map((item, index) => {
        if (item.object === "custom") {
            return (
                <Link href={item.url} key={item.ID}>
                    <a className="navbar-item">{item.title}</a>
                </Link>
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "page";
        return (
            <Link
                as={`/${item.object}/${slug}`}
                href={`/${actualPage}?slug=${slug}`}
                key={item.ID}
            >
                <a className="navbar-item">{item.title}</a>
            </Link>
        );
    });

    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">

              <a className="navbar-item"><img src={this.props.logo}/></a>
          </Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            {menuItems}
            {
              this.props.cta && this.props.cta.button_label &&
            <div className="navbar-item">
                <Button
                slug={this.props.cta.page_link[0].post_name}
                label={this.props.cta.button_label}
                post_type={this.props.cta.page_link[0].post_type}
                link={`/${this.props.cta.page_link[0].post_type}?slug=${this.props.cta.page_link[0].post_name}`}
                type={this.props.cta.link_type}
                customClass={'is-primary'}
                />
            </div>
              }
          </div>
        </div>
      </nav>

    )
  }


}

export default Menu;
