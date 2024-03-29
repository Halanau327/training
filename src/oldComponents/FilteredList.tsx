import React from 'react';
import {FilteredPropsType} from "../App";

type FilteredListPropsType = {
    callback: (name: FilteredPropsType) => void
    arr: Array<ArrType>
}

type ArrType = {
    banknots: string
    value: number
    number: string
}


export const FilteredList = (props:FilteredListPropsType) => {

    return (
        <>
            <ul>
                {props.arr.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.callback("ALL")}>ALL</button>
            <button onClick={() => props.callback("RUBLS")}>RUBLS</button>
            <button onClick={() => props.callback("Dollars")}>Dollars</button>
        </>
    );
};

