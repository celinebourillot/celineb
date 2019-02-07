import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

class FAQaccordionSingle extends React.Component {

    state = {
        open: false
    }

    onOpen = () => {
        this.setState({open: !this.state.open})
    }

    render() {

        const {
            faq,
            index
        } = this.props;

        return (
            <div id={'accordionSingle' + index} key={index}>
                <div 
                    className="accordion__title" 
                    data-toggle="collapse" data-target={`#collapse${index}`} 
                    aria-expanded="true" 
                    aria-controls={`collapse${index}`}
                    onClick={this.onOpen}
                >
                    <h4 className="margin-none">
                        {faq.name}
                    </h4>
                    <div className="icon">
                        {
                            this.state.open ? 
                            <i className="fas fa-minus" /> :
                            <i className="fas fa-plus" />
                        }
                    </div>
                </div>
                <hr className="hr-testimonials"/>
                <div id={`collapse${index}`} className="accordion__item collapse" aria-labelledby={'accordionSingle' + index} data-parent="#faqAccordion">
                        {RichText.render(faq.description)}
                </div>
            </div>
        )
    }
}

FAQaccordionSingle.propTypes = {
    faq: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.object)
    }),
    index: PropTypes.number
}

export default FAQaccordionSingle;
