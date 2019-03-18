import PropTypes from 'prop-types';
import Button from '../Button.js';

export default function HeroSlice(props) {

  const {
      title,
      content,
      background_colour,
      banner_height,
      content_alignment,
      button_label,
      link_url,
      link_type,
      select_page,
      background_type,
      bg_picture

  } = props.data;

  let styleBackground = {};
  let styleText ='';
  background_type === 'image' &&
  (styleBackground = {
      backgroundImage: `url(${bg_picture})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height:'100%'
  });

    return (
      <React.Fragment>
      <section className={`hero is-relative ${banner_height}`}>
        <div className={`columns ${banner_height}`}>
          <div className="column is-half">
            <div className={`hero-body ${banner_height}`}>
              <div className={`container ${content_alignment}`}>
                <h1>
                  {title}
                </h1>
                <div className="intro"
                    dangerouslySetInnerHTML={{
                        __html: content
                    }}
                />

                <Button
                label={button_label}
                slug={select_page && select_page.length > 0 && select_page[0].post_name}
                post_type={select_page && select_page.length > 0 && select_page[0].post_type}
                link={link_type === 'Internal' && select_page && select_page.length > 0 ? `/${select_page[0].post_type}?slug=${select_page[0].post_name}` : link_url}
                type={link_type}
                customClass={'is-primary'} />
              </div>
            </div>
          </div>
            {styleBackground &&
              <div className="column is-half">
                <div className="image" style={styleBackground}></div>
              </div>
            }
          </div>
      </section>
      <section className="company-block-container">
      <div className="container">
        <div className="company-block">
          <div className="columns">
            <div className="column is-3">
              <img src="./static/images/Cosmos2-3.jpg"/>
            </div>
            <div className="column">
              <h3>Cosmos Digital</h3>
              <p>Cosmos is a company I started when I moved to the UK in 2014.
              I design and build websites for small businesses, with a very flexible and easy to use system that makes content management a breeze.
              Wordpress and the amazing ACF plugin are my main tools, and recently I have started building the whole front end of these website with React, improving performance.<br/>
              Visit the Cosmos website to see some examples of my work.</p>
              <a href="https://cosmosdigital.co.uk" target="_blank" className="button is-secondary">
                Visit Website
              </a>
            </div>
           </div>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
}

HeroSlice.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  background_colour: PropTypes.string,
  banner_height: PropTypes.string,
  content_alignment: PropTypes.string,
  button_label: PropTypes.string,
  link_url: PropTypes.string,
  link_type: PropTypes.string,
  select_page: PropTypes.string,
  background_type: PropTypes.string,
  bg_picture: PropTypes.string
}
