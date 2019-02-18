import React from "react";
import { Config } from "../config.js";

const PageWrapper = Comp => (
  class extends React.Component {
    static async getInitialProps(args) {

      let endpoint = `${Config.apiUrl}/menus/v1/menus/header-menu`;
      if (typeof window !== 'undefined') {
        endpoint = `https://cors-anywhere.herokuapp.com/${endpoint}`;
      }
      const headerMenuRes = await fetch(
        `${Config.apiUrl}/menus/v1/menus/header-menu`
      );
      const headerMenu = await headerMenuRes.json();

      let optionsEndpoint = `${Config.apiUrl}/acf/v3/options/headless-settings`;
      if (typeof window !== 'undefined') {
        optionsEndpoint = `https://cors-anywhere.herokuapp.com/${endpoint}`;
      }
      const optionsRes = await fetch(
          `${Config.apiUrl}/acf/v3/options/headless-settings`
      );
      const options = await optionsRes.json();
      return {
        headerMenu,
        options,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
      };
    }

    render() {
      return (
        <Comp {...this.props} />
      )
    }
  }
)

export default PageWrapper;
