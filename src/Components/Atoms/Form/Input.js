import PropTypes from "prop-types";

function Input({input}) {
    return (
        <input className="input" onChange={input.onChange} value={input.value} placeholder={input.placeholder}/>
    )
}

const inputProps = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

Input.propTypes = {
    input: PropTypes.shape(inputProps)
}

export default Input
