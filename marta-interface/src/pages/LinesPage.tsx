import { useEffect, useState } from "react";
import TrainList from "../components/TrainList";
import { stationData, trainData} from "../components/Train";
import type { TrainType } from "../components/Train";
import NavBar, { lines } from "../components/NavBar";


const API_BASE_URL = 'https://midsem-bootcamp-api.onrender.com'
export type Line = {
    name: 'blue' | 'gold' | 'red' | 'green'
    hexCode: string
} 

const LinesPage = ({line} : {line: Line}) => {

    const [data, setData] = useState<{stations: string[], trains: TrainType[]}>({stations: [], trains: []});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const arrivalsUrl = `${API_BASE_URL}/arrivals/${line.name}`
        fetch(arrivalsUrl).then(response => response.json()).then(newTrains => {
            setData((data) => {return {...data, trains: newTrains}})})
        
        const stationsUrl = `${API_BASE_URL}/stations/${line.name}`
        fetch(stationsUrl).then(response => response.json()).then(newStations => {
            setData((data) => {return { ...data, stations: newStations}}); setLoading(false)})
    }, [line]);

    return ( <>
        {loading && <p>Loading... </p>}
        <div className='h-full flex flex-col'>
            <div>
                <NavBar activeLine={line}/>
            </div>
            <div className='flex flex-1'>
                {loading ? <p>Loading ...</p> : <TrainList line={line} stations={data.stations.map(s => {return {name: s}})} trains={data.trains.map(d => { return {...d, line: line}})} />}
            </div>
        </div>
    </> );
}
 
export default LinesPage;