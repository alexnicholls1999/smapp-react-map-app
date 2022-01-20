import PropTypes from "prop-types";
import atoms from './../atoms.scss';

function Input({input}) {
    return (
        <input className={atoms.input} onChange={input.onChange} value={input.value} placeholder={input.placeholder} onKeyDown={input.onKeyDown}/>
    )
}

const inputProps = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

Input.propTypes = {
    input: PropTypes.shape(inputProps)
}

export default Input
