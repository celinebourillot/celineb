import PropTypes from 'prop-types'
import Link from 'next/link';

export default function Button(props) {

    const {
        link,
        label,
        type,
        customClass
    } = props;

    if (label && link ) return (
        <Link href={link}>
            <a className={`button is-rounded ${customClass}`}>
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
