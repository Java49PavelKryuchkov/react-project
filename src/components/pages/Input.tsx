import React, { useEffect, useRef } from "react"
import { Alert } from "./Alert";

export type InputProps = {
    placeHolder: string,
    inputProcess: (value: string) => string
}

export const Input: React.FC<InputProps> = ({placeHolder, inputProcess}) => {
    let inputElement: HTMLInputElement | null; 
    const inputId = useRef(Math.round(Math.random() * 10000000) + '');
    const [message, setMessage] = React.useState('');
    function processGo(): void {
        setMessage('');
        const messageRet = inputProcess(inputElement!.value);
        if(messageRet == '') {
            setMessage('')
        } else {
            setMessage(messageRet)
        }
    }
    useEffect(() => {
        inputElement = document.getElementById(inputId.current) as HTMLInputElement;
    })
    return <div>
        <input id={inputId.current} placeholder={placeHolder} />
        <button onClick={processGo}>GO</button>
        {message && <Alert type={"error"} message={message}/>}
    </div>
}