import './App.css';
import styled from 'styled-components';
import React, {useState} from "react";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')


    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <StyledApp>
            <Input setTitle={setTitle} title={title}/>
            <Button callBack={callBackButtonHandler} name="+"/>
            {/*<FullInput callBack={addMessage}/>*/}
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </StyledApp>
    )
}

export default App;

const StyledApp = styled.div`

`