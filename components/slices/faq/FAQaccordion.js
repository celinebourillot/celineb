import PropTypes from 'prop-types';
import FAQaccordionSingle from './FAQaccordionSingle';


export const FAQaccordion = (props) => {

    const {
        faqs
    } = props;

    if(!faqs || faqs.length === 0) return '';

    return (
        <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
                <FAQaccordionSingle key={index} faq={faq} index={index}/>
            ))}
        </div>
    )
}

FAQaccordion.propTypes = {
    faqs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.object)
    })),
}