import PropTypes from 'prop-types';
import { ButtonPrimary } from '../common/elements/buttons/ButtonPrimary';
import {sectionPaddingClasses} from '../../helpers/prismic-slice-helpers/PrismicSliceHelpers';

export default function MultipleMediaSlice(props) {

    const {
        title,
        button_title,
        button_url,
        margins,
        media
    } = props.content;

    const mediaImage = (singleMedia, index) => {
        return (
            <div className="col-12 col-md-6 col-xl-4" key={index}>
                <img src={singleMedia.image} alt={singleMedia.image_alternative} className="img-fluid" />
                <h3>{singleMedia.title}</h3>
                <p>{singleMedia.description}</p>
            </div>
        )
    }

    const mediaYoutube = (singleMedia, index) => {
        return (
            <div className="col-12 col-md-6 col-xl-4" key={index}>
                <div dangerouslySetInnerHTML={{ __html: singleMedia.youtube.html }} />
                <h3>{singleMedia.title}</h3>
                <p>{singleMedia.description}</p>
            </div>
        )
    }

    const mediaWistia = (singleMedia, index) => {
        return (
            <div className="col-12 col-md-6 col-xl-4" key={index}>
                <div dangerouslySetInnerHTML={{ __html: singleMedia.wistia }} />
                <h3>{singleMedia.title}</h3>
                <p>{singleMedia.description}</p>
            </div>
        )
    }

    if(!media || media.length === 0) return '';

    return (
        <section className={sectionPaddingClasses(margins)}>
            <div className="container">
                {title && <h2 className="text-center padding-bottom">{title}</h2>}
                <div className="row justify-content-center">
                    {
                        media.map((singleMedia, index) => {
                            if (singleMedia.media_type === 'image') return mediaImage(singleMedia, index)
                            if (singleMedia.media_type === 'youtube') return mediaYoutube(singleMedia, index)
                            if (singleMedia.media_type === 'wistia') return mediaWistia(singleMedia, index)
                            return ''
                        })
                    }
                </div>
                <div className="text-center padding-top">
                    {
                        button_url &&
                        button_title &&
                        <ButtonPrimary title={button_title} url={button_url} />
                    }
                </div>
            </div>
        </section>
    )
}

MultipleMediaSlice.propTypes = {
    content: PropTypes.shape({
        type: PropTypes.string,
        title: PropTypes.string,
        button_title: PropTypes.string,
        button_url: PropTypes.string,
        media: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            image: PropTypes.string,
            image_alternative: PropTypes.string,
            media_type: PropTypes.string,
            youtube: PropTypes.object,
            wistia: PropTypes.string
        })),
    })
}
