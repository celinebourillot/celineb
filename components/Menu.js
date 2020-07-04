import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";

import MobileMenu from './MobileMenu.js';
import Button from './Button.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faTwitter, faLinkedin, faInstagram, faDribbble)

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
              as={`/${slug}`}
              href={`/${actualPage}?slug=${slug}`}
              key={item.ID}
          >
              <a className="navbar-item">{item.title}</a>
          </Link>
        );
    });

    return(
      <React.Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className={this.props.pageSlug === "sample-page" ? "display-none" : ""}>
            <Link href="/">
                <a className="navbar-item"><img src={this.props.logo}/></a>
            </Link>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">



            <div className={this.props.pageSlug === "sample-page" ? "navbar-start is-white-text" : "navbar-start"}>


              {menuItems}

                {this.props.github &&
                  <div className="navbar-item">
                    <a href={this.props.github} target="_blank">
                      <span className="icon">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                      </span>
                    </a>
                  </div>
                }

                {this.props.linkedin &&
                  <div className="navbar-item">
                    <a href={this.props.linkedin} target="_blank">
                      <span className="icon">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                      </span>
                    </a>
                  </div>
                }
 
                {this.props.dribbble &&
                  <div className="navbar-item">
                    <a href={this.props.dribbble} target="_blank">
                      <span className="icon">
                        <FontAwesomeIcon icon={['fab', 'dribbble']} />
                      </span>
                    </a>
                  </div>
                }

                {this.props.instagram &&
                  <div className="navbar-item">
                    <a href={this.props.instagram} target="_blank">
                      <span className="icon">
                        <FontAwesomeIcon icon={['fab', 'instagram']}/>
                      </span>
                    </a>
                  </div>
                }

                {this.props.twitter &&
                  <div className="navbar-item">
                    <a href={this.props.twitter} target="_blank">
                      <span className="icon">
                        <FontAwesomeIcon icon="twitter" />
                      </span>
                    </a>
                  </div>
                }

            </div>

            {
              this.props.cta && this.props.cta.button_label &&
            <div className="navbar-end">
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
            </div>
              }




        </div>
      </nav>

      <MobileMenu 
        menuItems={this.props.menu.items} 
        twitter = {this.props.twitter}
        github = {this.props.github}
        dribbble = {this.props.dribbble}
        linkedin = {this.props.linkedin}
        instagram = {this.props.instagram}
        button={this.props.cta}
      
      />

      </React.Fragment>

    )
  }


}

export default Menu;
