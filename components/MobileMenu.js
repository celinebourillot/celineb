import React, { Component } from "react";
import Link from "next/link";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import Button from './Button.js';

class MobileMenu extends Component {
  constructor(props) {
      super(props);
      this.targetRef = React.createRef();
      this.state = {
        isOpen: false
      }
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }


  showMenu = () => {
    this.setState ({
      isOpen:true
    })

    //Disable body scroll
    disableBodyScroll(this.targetRef.current);
    document.body.classList.add("no-body-sroll");
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  };

  hideMenu = () => {
    this.setState ({
      isOpen:false
    })

    //Re-enable body scroll
    enableBodyScroll(this.targetRef.current);
    document.body.classList.remove("no-body-sroll");
    document.body.style.position = "static";
    document.body.style.width = "auto";
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
    document.body.classList.remove("no-body-sroll");
    document.body.style.position = "static";
    document.body.style.width = "auto";
  }

  render() {

    const menuItems = this.props.menuItems.map((item, index) => {
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
           <a onClick={() => this.hideMenu()} className="navbar-item">{item.title}</a>
       </Link>
     );
 });

    return(

    <React.Fragment>

      <a role="button" onClick={this.showMenu} className="navbar-burger burger" aria-label="menu" aria-expanded={this.state.isOpen} data-target="mobile-menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

      <div className={!this.state.isOpen ? "mobile-menu display-none" : "mobile-menu" } ref={this.targetRef}>

      <button className="close-btn" onClick={this.hideMenu}>X Close</button>
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

    </React.Fragment>
    )
  }


}

export default MobileMenu;
