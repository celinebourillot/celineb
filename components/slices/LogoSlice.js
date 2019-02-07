import PropTypes from 'prop-types';
import Button from '../Button.js';

export default function LogoSlice(props) {
    const {
        title,
        subtitle,
        intro,
        logos

    } = props.data;


    return (



      <section className="section logos">
        <div className="container">
        {title && <h3>{title}</h3>}
        {subtitle && <h4>{subtitle}</h4>}
        {intro && <p className="small-text">{intro}</p>}
        <div className="columns">
                {logos && logos.map((logo, index) => (
      						<div className="column" key={index}>
                    <div className="logo">
                    {logo.logo_link ?
                      <a href="">
                        <img src={logo.logo}/>
                      </a> :

                      <img src={logo.logo}/>
                    }

                    </div>
      						</div>
      					))}
          </div>
        </div>
      </section>
    );
}

LogoSlice.propTypes = {

}
