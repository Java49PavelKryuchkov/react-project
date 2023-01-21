import { prependOnceListener } from "process";
import { stringify } from "querystring";
import React from "react";
import timeZones from "../time-zones";
type TimerProps = {
    cityOrCountry: string;
}

export const Timer: React.FC<TimerProps> = (props) => {
    let elementIndex: number = timeZones.findIndex(el => JSON.stringify(el).includes(props.cityOrCountry));
    const timeZone: string = timeZones[elementIndex]?.name;
    const timeZoneDefault: string = timeZone ? props.cityOrCountry : "Israel";
    const[time, setTime] = React.useState<Date>(new Date());
    function tick() {
        console.log("check");
        setTime(new Date());
    }
    React.useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    });
    return <div>
        <h3>Time in time zone {timeZoneDefault}</h3>
        <label style={{display: "block", textAlign: "center", fontSize: "2em"}}>Time {time.toLocaleTimeString(undefined, {timeZone})}</label>
        </div>
}