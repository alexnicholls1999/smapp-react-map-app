import React, {useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {slide as Menu} from "react-burger-menu";
import { relative } from "path";

export default props => {
    return (
        <Menu {...props}>
            <div class="menuheader">
                <h1>Smapp</h1>
                <div id="menu"></div>
            </div>
        </Menu>
    );
};