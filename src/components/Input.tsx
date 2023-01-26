import React, { useEffect } from "react";
type inputProps = {
    placeHolder: string;
    processInput: (value: string) => string
}
export const Input: React.FC<inputProps> = ({placeHolder, processInput}) => {
    let inputElement: HTMLInputElement | null
    const [inputId] = React.useState(Math.round(Math.random() * 1000000) + '');
    const [message, setMessage] = React.useState('');
    function processGo(): void {
        setMessage('');
        const messageRet: string = processInput(inputElement!.value) //why do we need to assign inputElement!.value to messageRet through processInput, and not like const messageRet: string = (inputElement!.value)
        if (messageRet == '') {
            inputElement!.value = '';
        } else {
            setMessage(messageRet); //what the purpose of setMessage funct? Do we need it just to let the react know, that state is changed and need to do reassemble component?
        }
        useEffect(() => {
            inputElement = document.getElementById(inputId) as HTMLInputElement;
        })
}
return <div>
    <input id={inputId} placeholder={placeHolder} style={{width: "60vw"}} />
    <button onClick={processGo}>GO</button>
</div>
}
