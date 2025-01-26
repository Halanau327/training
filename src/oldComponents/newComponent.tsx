import React from 'react';
import styled from "styled-components";

type NewComponentType = {
    cars: Array<ComponentType>
}

type ComponentType = {
    manufacturer: string,
    model: string
}


export const
    NewComponent = (props: NewComponentType) => {
    return (
        <StyledNewComponent>
            {props.cars.map((car, index) => {
                return (
                    <table>
                        <tr>
                            <td key={index}>{car.manufacturer}</td>
                            <td key={index}>{car.model}</td>
                        </tr>
                    </table>
                )
            })}

        </StyledNewComponent>
    );
};

const StyledNewComponent = styled.div`

`