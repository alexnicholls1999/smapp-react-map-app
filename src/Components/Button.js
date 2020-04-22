import React from "react";
import PropTypes from "prop-types";
import NearMeIcon from "@material-ui/icons/NearMe";

function gpsbtn(props) {

    const {onClick} = props;

    const gpsstyle = {
        color: "#00E3A1",
        display: "flex",
        zIndex: "500",
        position: "absolute",
        right: "8",
        top: "37vh",
        height: "20px",
    }

    return(
        <NearMeIcon style={gpsstyle} onClick={onClick}/>
    )
}

gpsbtn.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

gpsbtn.defaultProps = {
    onClick: () => {}
}

export default gpsbtn; 
