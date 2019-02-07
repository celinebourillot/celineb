import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { ButtonPrimary } from '../common/elements/buttons/ButtonPrimary';
import {sectionPaddingClasses} from '../../helpers/prismic-slice-helpers/PrismicSliceHelpers';

export default function SingleMediaSlice(props) {

    const {
        title,
        description,
        button_title,
        button_url,
        image,
        image_alternative,
        media_position,
        text_align,
        media_type,
        youtube,
        margins,
        wistia
    } = props.content;

    return (
        <section className={sectionPaddingClasses(margins)}>
            <div className="container">
                <div className="row">
                    <div className={`col-12 col-md-6 ${media_position === 'left' && 'order-12'} ${text_align && 'text-'+text_align}`}>
                        {title && <h3>{title}</h3>}
                        {description && description.length > 0 && RichText.render(description)}
                        {
                            button_url &&
                            button_title &&
                            <ButtonPrimary title={button_title} url={button_url} />
                        }
                    </div>
                    <div className={`col-12 col-md-6 ${media_position === 'left' && 'order-1'}`}>
                        {
                            media_type === 'image' && <img src={image} alt={image_alternative} className="img-fluid" />
                        }
                        {
                            media_type === 'youtube' && <div dangerouslySetInnerHTML={{ __html: youtube.html }} />
                        }
                        {
                            media_type === 'wistia' && <div dangerouslySetInnerHTML={{ __html: wistia }} />
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

SingleMediaSlice.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        type: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.object),
        button_title: PropTypes.string,
        button_url: PropTypes.string,
        image: PropTypes.string,
        image_alternative: PropTypes.string,
        media_position: PropTypes.string,
        text_align: PropTypes.string,
        media_type: PropTypes.string,
        youtube: PropTypes.object,
        wistia: PropTypes.string
    })
}
