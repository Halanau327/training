import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    callBack: (title: string) => void
}


export const FullInput = ({callBack}: FullInputPropsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        callBack(title)
        setTitle("")
    }
    return (
        <div>
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>
        </div>
    );
};

