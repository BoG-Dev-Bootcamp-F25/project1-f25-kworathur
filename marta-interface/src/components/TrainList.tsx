import { useState } from "react";
import type { Line } from "../pages/LinesPage";
import type { Train as TrainType } from "./Train";
import Train from "./Train";



type StationType = {
    name: string
}
type TrainList = {
    color: Line;
    // departing stations
    stations: StationType[];
    trains: TrainType[];
}

const TrainList = ({color, stations, trains}: TrainList) => {

    const [destStation, setDestStation] = useState<StationType>({name: ''});

    return <div className='mt-2 w-full flex'>
        <div className='min-w-32 bg-grey flex-1'>
            {stations.map((s, i) => <button key={i} className='bg-grey' onClick={() => setDestStation(s)}>{s.name}</button>)}
        </div>
        <div className='flex-3'>
            <div>

            </div>
            <div >
                {trains.filter(t => !destStation.name || t.STATION === destStation.name).map((t, i) => {
                return <Train id={i} key={i} data={{train: t, line: color}} />
            })}
            </div>
        </div>
    </div>;
}
 
export default TrainList;