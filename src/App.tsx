import './App.css';
import styled from 'styled-components';
import {useState} from "react";


function App() {

    // let a = 1
    let[a, setA] = useState(1)

    const onclickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onclickHandlerZero = () => {
        setA(a = 0)
        console.log(a)
    }


    return (
        <StyledApp>
            <h1>{a}</h1>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onclickHandlerZero}>0</button>
        </StyledApp>
    )
}

export default App;

const StyledApp = styled.div`

`






















// const topCars = [
//     {manufacturer:'BMW', model:'m5cs'},
//     {manufacturer:'Mercedes', model:'e63s'},
//     {manufacturer:'Audi', model:'rs6'}
// ]
//
// const Button1Foo = (subscriber: string, age: number, adress: string) => {
//     console.log(subscriber, age, adress)
// }
//
// const Button2Foo = (subscriber: string) => {
//     console.log(subscriber)
// }
//
// const Button3Foo = () => {
//
// }


{/*<NewComponent cars={topCars}/>*/}
{/*<Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("Vasya", 21, "Minsk")}/>*/}
{/*<Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("Ivan")}/>*/}
{/*<Button name={"Stupid-button"} callBack={() => Button3Foo}/>*/}