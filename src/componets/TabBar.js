//CORE
import React from "react";
//LIBRARIES
import styled from "styled-components";
//UI
import { Tab } from "../ui";

const Bar = styled.div`
    display: flex;
`

export default () => {
    return (
        <Bar>
            <Tab />
            <Tab />
        </Bar>
    )
}