import './App.css';
import styled from 'styled-components';
import {NewComponent} from "./components/newComponent";
import {Button} from "./components/Button";


function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    const Button1Foo = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {

    }
    return (
        <StyledApp>
            <NewComponent cars={topCars}/>
            <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("Vasya", 21, "Minsk")}/>
            <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("Ivan")}/>
            <Button name={"Stupid-button"} callBack={() => Button3Foo}/>
        </StyledApp>
    )
}

export default App;

const StyledApp = styled.div`

`
