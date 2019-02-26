import PropTypes from 'prop-types'
import Link from 'next/link';

export default function Button(props) {

    const {
        link,
        label,
        type,
        post_type,
        slug,
        customClass
    } = props;


    if (label && link && type === "Internal") return (
        <Link href={link} as={`/${post_type}/${slug}`}>
            <a className={`button is-rounded ${customClass}`}>
                {label}
            </a>
        </Link>
    )

    if (label && link && type === "External") return (
        <Link href={link}>
            <a className={`button is-rounded ${customClass}`} target="_blank">
                {label}
            </a>
        </Link>
    )

    return '';

}


Button.propTypes = {
    url: PropTypes.string,
    label: PropTypes.string,
    customClass: PropTypes.string,
    type: PropTypes.string
}
