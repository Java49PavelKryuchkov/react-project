import React, { useEffect } from "react";

type InputProps {
    inputID: string;
    inputProcess: (value: string) => string;
}
export const Input: React.FC<InputProps> = ({inputID, inputProcess}) => {
    let inputElement: HTMLElement | null
    const [message, setMessage] = React.useState('');
    function processGo(): void {
        setMessage('');
        const messageRet: string = inputProcess(inputElement!.value);
        if(messageRet == '') {
            inputElement!.value = '';
        } else {
            setMessage(messageRet);
        }
    }
    useEffect(() => {
        inputElement = document.getElementById(inputID) as HTMLInputElement;
    })
    return <div>
        <input id="inputID"/>
        <button onClick={processGo}>GO</button>
    </div>
}