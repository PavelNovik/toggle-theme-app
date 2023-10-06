import React from "react";
import styled from "styled-components";

export type SwitchProps = {
    nameBtn?: string
    onClickHandler: () => void
}
const Button = (props: SwitchProps) => {

    const name = props.nameBtn
    const onClickHandler = () => {
        props.onClickHandler()
    }

    return (
        <button onClick={onClickHandler}>{name}</button>


    );
}

// const Container = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   color: ${props => props.theme.textColor};
//   background-color: ${props => props.theme.background};
//   padding: 1rem;
//   text-align: center;
//   font-family: sans-serif;
// `;

export default Button;