import React, { useEffect, useRef } from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";

type TimerProps = {
    cityOrCountry: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    const timeZoneIndex: number = timeZones.findIndex(tz => JSON.stringify(tz).toLowerCase().includes(props.cityOrCountry));
    const [timeZone, setTimeZones] = React.useState(timeZones[timeZoneIndex]?.name);
    let timeZoneName = useRef(timeZone ? props.cityOrCountry : "Israel");
    const [time, setTime] = React.useState(new Date())
    function tick() {
        setTime(new Date());
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000);
        const timeZoneIndex: number = timeZones.findIndex(tz => JSON.stringify(tz).toLowerCase().includes(props.cityOrCountry));
        timeZoneName.current = timeZone ? props.cityOrCountry : "Israel";
        setTimeZones(timeZones[timeZoneIndex]?.name);
        return () => clearInterval(interval);
    }, [props])

    function processCityCountry(value: string): string {
        const index =  timeZones.findIndex(tz => JSON.stringify(tz).includes(value));
        let res = '';
        if (index < 0) {
            res = `${value} is w   rong city / country, please type again`;
        } else {
            timeZoneName.current = value;
            setTimeZones(timeZones[index].name);
        }
        return res;
    }

    return <div>
        <Input placeHolder={"Enter city or country"} processInput={processCityCountry}/>
        <h3 className='logo'>Time in {timeZoneName.current}</h3>
        <label style={{display: "block",
         textAlign: "center", fontSize: "2em"}}>
            {time.toLocaleTimeString(undefined,{timeZone})}</label>
    </div>
}
