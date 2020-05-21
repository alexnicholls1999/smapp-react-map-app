import React, { useEffect, createElement } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';

function Search(props) {

    const Form = styled.form`
        position: absolute;
        display: flex;
        top: 0;
        margin-top: 25px;
        right: 7.5%;
        z-index: 2000;
        background-color: white;
        height: 35px;
        width: 250px;
        border-radius: 8px;
        box-shadow: 0px 2px 10px rgba(184, 184, 184, 0.21);
    `;

    const Input = styled.input`
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
        color: #DFDFDF;
        position: relative;
        border: none;
        background-color: transparent;
        padding-left: 20px;
        width: 200px;

        &:focus,
        &:active {
            outline: none;
        }

        &::placeholder {
            color: #DFDFDF;
        }
    `;

    const search = {
        position: "relative",
        color: "#5EFBCC",
        // paddingLeft: "25px",
        fontWeight: "200", 
        padding: "6px",
        height: "22px",
    }
    
    

    return(

        <Form id= "search">
            <Input
                id= "location"
                placeholder= "Search for location"
            />


        </Form>    

    )
}

Search.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

Search.defaultProps = {
    onClick: () => {}
}

export default Search; 