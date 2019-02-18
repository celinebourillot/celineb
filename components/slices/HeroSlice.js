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
  });

  background_type === 'image' && (
  styleText = 'has-text-white');

    return (

      <section className={`hero is-relative ${banner_height} ${background_colour}`} style={styleBackground}>
        {
          background_type === 'image' ?
          <div className="is-overlay is-overlay--dark"></div> : ''
        }
        <div className="hero-body">
          <div className={`container ${content_alignment} ${styleText}`}>
            <h1>
              {title}
            </h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: content
                }}
            />

            <Button
            label={button_label}
            link={link_type === 'Internal' && select_page ? `/${select_page[0].post_type}?slug=${select_page[0].post_name}` : link_url}
            type={link_type}
            customClass={'is-primary'} />
          </div>
        </div>
      </section>
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
