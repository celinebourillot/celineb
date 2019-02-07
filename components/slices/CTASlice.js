import PropTypes from 'prop-types';
import Button from '../Button.js';

class CTASlice extends React.Component {

  render() {

    const {
        title,
        button_label,
        link_url,
        link_type,
        select_page,
        quote
    } = this.props.data;


    return (
        <section className="section cta-block">
            <div className="container">

                {title && <h4>title</h4>}
                {quote && <h3>{quote}</h3>}
                <Button
                label={button_label}
                link={link_type === 'Internal'? select_page : link_url}
                type={link_type}
                customClass={'is-primary is-yellow'}
                />

            </div>
        </section>
    )
  }
}
CTASlice.propTypes = {

}

export default CTASlice;
