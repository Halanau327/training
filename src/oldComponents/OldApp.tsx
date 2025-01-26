import React from 'react';

const OldApp = () => {
    return (
        <div>

        </div>
    );
};

export default OldApp;








// import './App.css';
// import styled from 'styled-oldComponents';
// import {useState} from "react";
// import {FilteredList} from "./oldComponents/FilteredList";
//
//
// export type FilteredPropsType = "ALL" | "RUBLS" | "Dollars"
//
// function App() {
//     const [money, setMoney] = useState([
//         {banknots: 'Dollars', value: 100, number: ' a1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' z1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
//         {banknots: 'Dollars', value: 100, number: ' e1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' c1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' x1234567890'},
//         {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
//     ])
//
//     const [filter, setFilter] = useState<FilteredPropsType>("ALL")
//
//     let currentMoney = money
//     if (filter === "Dollars") {
//         currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "Dollars");
//     } else if (filter === "RUBLS") {
//         currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "RUBLS");
//     }
//
//     const onClickFilterHandler = (nameButton: FilteredPropsType) => {
//         setFilter(nameButton)
//     }
//
//     return (
//         <>
//             <FilteredList arr={currentMoney} callback={onClickFilterHandler}/>
//             {/*<StyledApp>*/}
//             {/*    {currentMoney.map((objFromMoneyArr, index) => {*/}
//             {/*        return (*/}
//             {/*            <li key={index}>*/}
//             {/*                <span>{objFromMoneyArr.banknots}</span>*/}
//             {/*                <span>{objFromMoneyArr.value}</span>*/}
//             {/*                <span>{objFromMoneyArr.number}</span>*/}
//             {/*            </li>*/}
//             {/*        )*/}
//             {/*    })}*/}
//             {/*</StyledApp>*/}
//             {/*<button onClick={() => onClickFilterHandler("ALL")}>ALL</button>*/}
//             {/*<button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>*/}
//             {/*<button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>*/}
//         </>
//     )
// }
//
// export default App;
//
// const StyledApp = styled.ul`
//
// `
//
//
// // // let a = 1
// // let[a, setA] = useState(1)
// //
// // const onclickHandler = () => {
// //     setA(++a)
// //     console.log(a)
// // }
// //
// // const onclickHandlerZero = () => {
// //     setA(a = 0)
// //     console.log(a)
// // }
//
//
// {/*<h1>{a}</h1>*/
// }
// {/*<button onClick={onclickHandler}>number</button>*/
// }
// {/*<button onClick={onclickHandlerZero}>0</button>*/
// }
//
//
// // const topCars = [
// //     {manufacturer:'BMW', model:'m5cs'},
// //     {manufacturer:'Mercedes', model:'e63s'},
// //     {manufacturer:'Audi', model:'rs6'}
// // ]
// //
// // const Button1Foo = (subscriber: string, age: number, adress: string) => {
// //     console.log(subscriber, age, adress)
// // }
// //
// // const Button2Foo = (subscriber: string) => {
// //     console.log(subscriber)
// // }
// //
// // const Button3Foo = () => {
// //
// // }
//
//
// {/*<NewComponent cars={topCars}/>*/
// }
// {/*<Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("Vasya", 21, "Minsk")}/>*/
// }
// {/*<Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("Ivan")}/>*/
// }
// {/*<Button name={"Stupid-button"} callBack={() => Button3Foo}/>*/
// }