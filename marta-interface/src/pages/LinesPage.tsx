import { useEffect, useState } from "react";
import TrainList from "../components/TrainList";
import { stationData, trainData, type Train } from "../components/Train";
import NavBar, { lines } from "../components/NavBar";


const API_BASE_URL = 'https://midsem-bootcamp-api.onrender.com'
export type Line = {
    name: 'Blue' | 'Gold' | 'Red' | 'Green'
    hexCode: string
} 

const LinesPage = () => {

    const [currLine, setCurrLine] = useState<Line>(lines[0]); 
    const [data, setData] = useState<Array<Train> | null>(null);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const url = `${API_BASE_URL}/arrivals/${currLine}`
    //     fetch(url).then(response => response.json()).then(data => {
    //         setData(data); setLoading(false)})
    // });
    return ( <>
        {loading && <p>Loading... </p>}
        <NavBar activeLine={currLine} setActiveLine={setCurrLine}/>
        <TrainList color={currLine} stations={stationData.map(s => {return {name: s}})} trains={trainData.map(d => { return {...d, line: currLine}})} />
    </> );
}
 
export default LinesPage;