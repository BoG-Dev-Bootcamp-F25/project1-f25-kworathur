import type { Line } from "../pages/LinesPage";
import type { Train as TrainType } from "./Train";
import Train from "./Train";

type TrainList = {
    color: Line;
    data: TrainType[];
}

const TrainList = ({color, data}: TrainList) => {
    console.log('Train data ', data)
    return <div className='w-4/5 h-9/10'>
        {data.map((t, i) => {
            return <Train id={i} data={{train: t, line: color}} />
        })}
    </div>;
}
 
export default TrainList;