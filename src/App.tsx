import React from 'react';
import { Input } from './components/Input';
import { Timer } from './components/Timer';


function App() {
    const [citiesList, setCitiesList] = React.useState<string[]>([]); //why there'not useEffect hook?
    function inputProcessFun(value:string): string {
        const cities: string[] = value.split("#");
        const res: string = '';
        setCitiesList(cities.slice());
        return res;
    }
    function createDivs(): JSX.Element[] {
    const res: JSX.Element[] = []; //why JSX.element and not just []
    for(let i = 0; i < citiesList.length; i+=2) {
        res.push(<div>
          <Timer cityOrCountry={citiesList[i]} />
          <Timer cityOrCountry={citiesList[i + 1]} /> 
        </div>)
    }
    return res;
    }
    return <div style={flexColumn}>
    <Input placeHolder={'enter city/countries separated by #'}
     processInput={inputProcessFun}/> //   WHAT EXACTLY DO WE PASS THROUGH inputProcessFun()
     {createDivs()}
    

  </div>
}

export default App;