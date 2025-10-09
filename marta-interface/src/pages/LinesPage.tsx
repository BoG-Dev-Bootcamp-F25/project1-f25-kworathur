import { useEffect, useState } from "react";
import TrainList from "../components/TrainList";


export type Line = 'blue' | 'gold' | 'red' | 'green'
const LinesPage = () => {

    const [currLine, setCurrLine] = useState<Line>('gold'); 
    

    useEffect(() => {

    });
    return ( <>

        <TrainList color={currLine} data={[]} />
    </> );
}
 
export default LinesPage;