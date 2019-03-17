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


    if (label && link && post_type !== "page" ) return (
        <Link href={link} as={`/${post_type}/${slug}`}>
            <button className={`button ${customClass}`} target={type === "External" ? "_blank" : ""}>
                {label}
            </button>
        </Link>
    );

    if (label && link && post_type === "page" ) return (
        <Link href={link} as={`/${slug}`}>
            <button className={`button ${customClass}`}>
                {label}
            </button>
        </Link>
    )

    if (label && link && type === "External") return (
        <Link href={link}>
            <a className={`button ${customClass}`} target="_blank">
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
