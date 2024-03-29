import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <StyledButton onClick={onClickHandler}>{props.name}</StyledButton>
    );
};

const StyledButton = styled.button`
    max-width: 100%;
`

