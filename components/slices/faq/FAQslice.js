import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs'
import { ButtonPrimary } from '../../common/elements/buttons/ButtonPrimary'
import { FAQaccordion } from './FAQaccordion';

export default function FAQslice(props) {

    const {
        title,
        button_title,
        button_url,
        description,
        faqs
    } = props.faqs;

    //console.log(props);

    if(!faqs || faqs.length === 0) return '';

    return (
        <section className="faq">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 faq__cta">
                        {title && <h3 className="title">{title}</h3>}
                        <div className="description">
                            {description && description.length > 0 && RichText.render(description)}
                        </div>
                        {
                            button_title &&
                            button_url &&
                            <ButtonPrimary title={button_title} url={button_url} />
                        }
                    </div>
                    <div className="col-12 col-lg-8 faq__content">
                        <FAQaccordion faqs={faqs}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

FAQslice.propTypes = {
    faqs: PropTypes.shape({
        type: PropTypes.string,
        title: PropTypes.string,
        button_title: PropTypes.string,
        button_url: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.object),
        faqs: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.arrayOf(PropTypes.object)
        })),
    })
}