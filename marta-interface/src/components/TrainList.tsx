import { useState } from "react";
import type { Line } from "../pages/LinesPage";
import Train from "./Train";
import type { TrainType } from "./Train";



type StationType = {
    name: string
}
type TrainList = {
    line: Line;
    // departing stations
    stations: StationType[];
    trains: TrainType[];
}

const TrainList = ({line, stations, trains}: TrainList) => {

    const [destStation, setDestStation] = useState<StationType>({name: ''});
    const [activeFilters, setActiveFilters] = useState<string[]>([])
    
    const directionOfTravel = (line.name === 'Gold' || line.name === 'Red') ?  ["Northbound", "Southbound"]: ["Eastbound", "Westbound"]
    const filters = ["Arriving", "Scheduled",   ...directionOfTravel  ]

    const filteredTrains = trains.filter(t => destStation.name === 'All Stations' || t.STATION === destStation.name)
                                 .filter(t => {

                                    if (activeFilters.includes('Arriving')) {
                                        return +(t.WAITING_SECONDS) < 1000
                                    }

                                    if (activeFilters.includes('Scheduled')) {
                                        return +(t.WAITING_SECONDS) >= 1000
                                    }

                                    if (activeFilters.includes('Northbound') || activeFilters.includes('Eastbound')) {
                                        return (activeFilters.includes('Northbound') && t.DIRECTION === 'N') || (activeFilters.includes('Eastbound') || t.DIRECTION === 'E')
                                    }

                                    if (activeFilters.includes('Southbound') || activeFilters.includes('Westbound')) {
                                        return (activeFilters.includes('Southbound') && t.DIRECTION === 'S') || (activeFilters.includes('Westbound') || t.DIRECTION === 'W')
                                    }
                                    
                                    return true;
                                 } )
                                 .map((t, i) => {
                return <Train id={i} key={i} data={{train: t, line: line}} />
            })
    

    return <div className='mt-2 w-full flex'>
        <div className='min-w-32 bg-slate-900 text-white flex flex-col flex-1'>
            <h4>Select your starting station:</h4>
            <div className='mt-2 text-left flex-1 y-overflow flex flex-col'>
                 {[{name: 'All Stations'}, ...stations].map((s, i) => 
                    <div key={i} className='flex-1  min-h-8 max-h-16 border-b-4'><a  className='text-left pl-4' onClick={() => setDestStation(s)}>{s.name}</a></div>)}
            </div>
        </div>
        <div className='flex-3'>
            <div className='mt-4 flex justify-around'>
                {filters.map((ftr, i) => {
                    return <div key={i} className='hover:cursor-pointer border-1 rounded-sm p-2 pl-4 pr-4' onClick={() => setActiveFilters((value) => {
                        
                        if (value.includes(ftr)) {
                            console.log('Disabling filter ', ftr)
                            return value.filter(e => e != ftr)
                        }
                        console.log('Enabling filter ', ftr)
                        return [...value, ftr]
                    })}>{ftr}</div>
                })}
            </div>
            <div className='mt-4'>
                {filteredTrains.length == 0 ? 'No Data to Display' : filteredTrains}
            </div>
        </div>
    </div>;
}
 
export default TrainList;