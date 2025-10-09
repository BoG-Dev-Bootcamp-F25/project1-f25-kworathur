export type Train = {
    DESTINATION: string;
    DIRECTION: string;
    EVENT_TIME: string;
    HEAD_SIGN: string;
    LINE: string;
    NEXT_ARR: string;
    STATION: string;
    TRAIN_ID: string;
    WAITING_SECONDS: string;
    WAITING_TIME: string;
    RESPONSETIMESTAMP: string;
    VEHICLELONGITUDE: string;
    VEHICLELATITUDE: string;
    DELAY: string;
    TRIP_ID: string;
}

const Train = ({id, data}: {id: number, data: Train}) => {
    return ( <div key={id} className='flex'>
        <div>
            M
        </div>
        <div>
            
        </div>
        
    </div> );
}
 
export default Train;