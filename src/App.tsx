import React from 'react';
import { useSelector } from 'react-redux';
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Input } from './components/Input';
import { Login } from './components/Login';
import { Logout } from './components/Logout';

function App() {
  const auth: string = useSelector<any, string>(state => state.auth.authentificated);
  const [operand, setOperand] = React.useState(1);
  const [factor, setFactor] = React.useState(10);

    return <div>
      <p>{auth}</p>
      {auth && <div>
      {auth.includes("admin") && <Input placeHolder={'Enter operand'} inputProcess={function (value: string): string {
          setOperand(+value);
          return '';
        } }></Input>}
        <Input placeHolder={'Enter factor'} inputProcess={function (value: string): string {
          setFactor(+value);
          return '';
        } }></Input>
      <CounterUpdater operand={operand}></CounterUpdater>
      <CounterMultiply factor={factor}></CounterMultiply>
      <CounterSquare></CounterSquare>
      </div>}
      {auth && <Logout></Logout>}
      {!auth && <Login></Login>}
  </div>}

export default App;