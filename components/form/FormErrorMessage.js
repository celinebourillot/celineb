import PropTypes from "prop-types";

export const FormErrorMessage = (props) => {

    const {
        error
    } = props;

    if (error && error.length > 0) return (
        <div className="alert alert-danger small pt-1 pb-1 pl-2 pr-2 mb-1 rounded-0 shadow">{error}</div>
    )
    return null;
}

FormErrorMessage.propTypes = {
    error: PropTypes.string
}
