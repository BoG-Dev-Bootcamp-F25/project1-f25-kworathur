import type { Line } from "../pages/LinesPage";

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

export const stationData = [
  "Doraville",
  "Chamblee",
  "Brookhaven",
  "Lenox",
  "Lindbergh Center",
  "Arts Center",
  "Midtown",
  "North Avenue",
  "Civic Center",
  "Peachtree Center",
  "Five Points",
  "Garnett",
  "West End",
  "Oakland City",
  "Lakewood/Ft. McPherson",
  "East Point",
  "College Park",
  "Airport"
]

export const trainData = [
    {
    "DESTINATION": "AIRPORT",
    "DIRECTION": "S",
    "EVENT_TIME": "2025-10-21T20:27:39Z",
    "HEAD_SIGN": "BROOKHAVEN",
    "LINE": "GOLD",
    "NEXT_ARR": "2025-10-21T20:28:44Z",
    "STATION": "BROOKHAVEN STATION",
    "TRAIN_ID": "301",
    "WAITING_SECONDS": "296",
    "WAITING_TIME": "0 min",
    "RESPONSETIMESTAMP": "2025-10-21T20:27:47Z",
    "VEHICLELONGITUDE": "33.862226",
    "VEHICLELATITUDE": "-84.338355",
    "DELAY": "T64S",
    "TRIP_ID": "3180"
  },
  {
    "DESTINATION": "AIRPORT",
    "DIRECTION": "S",
    "EVENT_TIME": "2025-10-21T20:27:39Z",
    "HEAD_SIGN": "LENOX",
    "LINE": "GOLD",
    "NEXT_ARR": "2025-10-21T20:31:44Z",
    "STATION": "LENOX STATION",
    "TRAIN_ID": "301",
    "WAITING_SECONDS": "476",
    "WAITING_TIME": "3 min",
    "RESPONSETIMESTAMP": "2025-10-21T20:27:47Z",
    "VEHICLELONGITUDE": "33.862226",
    "VEHICLELATITUDE": "-84.338355",
    "DELAY": "T64S",
    "TRIP_ID": "3180"
  },
  {
    "DESTINATION": "AIRPORT",
    "DIRECTION": "S",
    "EVENT_TIME": "2025-10-21T16:27:30Z",
    "HEAD_SIGN": "LINDBERGH CENTER",
    "LINE": "GOLD",
    "NEXT_ARR": "2025-10-21T16:34:44Z",
    "STATION": "LINDBERGH CENTER STATION",
    "TRAIN_ID": "301",
    "WAITING_SECONDS": "425",
    "WAITING_TIME": "7 min",
    "RESPONSETIMESTAMP": "2025-10-21T16:27:38Z",
    "VEHICLELONGITUDE": "33.864563",
    "VEHICLELATITUDE": "-84.337218",
    "DELAY": "T64S",
    "TRIP_ID": "3180"
  },
  {
    "DESTINATION": "AIRPORT",
    "DIRECTION": "S",
    "EVENT_TIME": "2025-10-21T16:27:46Z",
    "HEAD_SIGN": "LINDBERGH CENTER",
    "LINE": "GOLD",
    "NEXT_ARR": "2025-10-21T16:34:44Z",
    "STATION": "LINDBERGH CENTER STATION",
    "TRAIN_ID": "301",
    "WAITING_SECONDS": "399",
    "WAITING_TIME": "6 min",
    "RESPONSETIMESTAMP": "2025-10-21T16:28:05Z",
    "VEHICLELONGITUDE": "33.860328",
    "VEHICLELATITUDE": "-84.339286",
    "DELAY": "T64S",
    "TRIP_ID": "3180"
  },
  {
    "DESTINATION": "AIRPORT",
    "DIRECTION": "S",
    "EVENT_TIME": "2025-10-21T16:30:19Z",
    "HEAD_SIGN": "LINDBERGH CENTER",
    "LINE": "GOLD",
    "NEXT_ARR": "2025-10-21T16:34:23Z",
    "STATION": "LINDBERGH CENTER STATION",
    "TRAIN_ID": "301",
    "WAITING_SECONDS": "228",
    "WAITING_TIME": "3 min",
    "RESPONSETIMESTAMP": "2025-10-21T16:30:34Z",
    "VEHICLELONGITUDE": "33.846652",
    "VEHICLELATITUDE": "-84.355818",
    "DELAY": "T43S",
    "TRIP_ID": "3180"
  },
  {
    "DESTINATION": "AIRPORT",
    "DIRECTION": "S",
    "EVENT_TIME": "2025-10-21T16:30:25Z",
    "HEAD_SIGN": "LINDBERGH CENTER",
    "LINE": "GOLD",
    "NEXT_ARR": "2025-10-21T16:33:47Z",
    "STATION": "LINDBERGH CENTER STATION",
    "TRAIN_ID": "301",
    "WAITING_SECONDS": "175",
    "WAITING_TIME": "2 min",
    "RESPONSETIMESTAMP": "2025-10-21T16:30:51Z",
    "VEHICLELONGITUDE": "33.845965",
    "VEHICLELATITUDE": "-84.357194",
    "DELAY": "T7S",
    "TRIP_ID": "3180"
  },
  {
    "DESTINATION": "NORTH SPRINGS",
    "DIRECTION": "N",
    "EVENT_TIME": "2025-10-21T20:26:30Z",
    "HEAD_SIGN": "WEST END",
    "LINE": "RED",
    "NEXT_ARR": "2025-10-21T20:27:12Z",
    "STATION": "WEST END STATION",
    "TRAIN_ID": "401",
    "WAITING_SECONDS": "265",
    "WAITING_TIME": "0 min",
    "RESPONSETIMESTAMP": "2025-10-21T20:26:46Z",
    "VEHICLELONGITUDE": "33.729535",
    "VEHICLELATITUDE": "-84.415484",
    "DELAY": "T32S",
    "TRIP_ID": "4070"
  },
  {
    "DESTINATION": "NORTH SPRINGS",
    "DIRECTION": "N",
    "EVENT_TIME": "2025-10-21T20:26:30Z",
    "HEAD_SIGN": "GARNETT",
    "LINE": "RED",
    "NEXT_ARR": "2025-10-21T20:29:12Z",
    "STATION": "GARNETT STATION",
    "TRAIN_ID": "401",
    "WAITING_SECONDS": "385",
    "WAITING_TIME": "2 min",
    "RESPONSETIMESTAMP": "2025-10-21T20:26:46Z",
    "VEHICLELONGITUDE": "33.729535",
    "VEHICLELATITUDE": "-84.415484",
    "DELAY": "T32S",
    "TRIP_ID": "4070"
  },
  {
    "DESTINATION": "NORTH SPRINGS",
    "DIRECTION": "N",
    "EVENT_TIME": "2025-10-21T20:28:23Z",
    "HEAD_SIGN": "GARNETT",
    "LINE": "RED",
    "NEXT_ARR": "2025-10-21T20:30:02Z",
    "STATION": "GARNETT STATION",
    "TRAIN_ID": "401",
    "WAITING_SECONDS": "334",
    "WAITING_TIME": "1 min",
    "RESPONSETIMESTAMP": "2025-10-21T20:28:28Z",
    "VEHICLELONGITUDE": "33.738264",
    "VEHICLELATITUDE": "-84.413459",
    "DELAY": "T82S",
    "TRIP_ID": "4070"
  },
  {
    "DESTINATION": "HE HOLMES",
    "DIRECTION": "W",
    "EVENT_TIME": "2025-10-21T20:32:12Z",
    "HEAD_SIGN": "KENSINGTON",
    "LINE": "BLUE",
    "NEXT_ARR": "2025-10-21T20:33:22Z",
    "STATION": "KENSINGTON STATION",
    "TRAIN_ID": "102",
    "WAITING_SECONDS": "302",
    "WAITING_TIME": "1 min",
    "RESPONSETIMESTAMP": "2025-10-21T20:32:19Z",
    "VEHICLELONGITUDE": "33.770284",
    "VEHICLELATITUDE": "-84.237309",
    "DELAY": "T102S",
    "TRIP_ID": "1179"
  },
  {
    "DESTINATION": "HE HOLMES",
    "DIRECTION": "W",
    "EVENT_TIME": "2025-10-21T20:32:55Z",
    "HEAD_SIGN": "KENSINGTON",
    "LINE": "BLUE",
    "NEXT_ARR": "2025-10-21T20:33:22Z",
    "STATION": "KENSINGTON STATION",
    "TRAIN_ID": "102",
    "WAITING_SECONDS": "254",
    "WAITING_TIME": "0 min",
    "RESPONSETIMESTAMP": "2025-10-21T20:33:08Z",
    "VEHICLELONGITUDE": "33.771393",
    "VEHICLELATITUDE": "-84.245651",
    "DELAY": "T102S",
    "TRIP_ID": "1179"
  },
  {
    "DESTINATION": "HE HOLMES",
    "DIRECTION": "E",
    "EVENT_TIME": "2025-10-21T16:21:07Z",
    "HEAD_SIGN": "AVONDALE",
    "LINE": "BLUE",
    "NEXT_ARR": "2025-10-21T16:34:40Z",
    "STATION": "AVONDALE STATION",
    "TRAIN_ID": "102",
    "WAITING_SECONDS": "271",
    "WAITING_TIME": "4 min",
    "RESPONSETIMESTAMP": "2025-10-21T16:30:08Z",
    "VEHICLELONGITUDE": "33.769899",
    "VEHICLELATITUDE": "-84.229674",
    "DELAY": "T0S",
    "TRIP_ID": "1179"
  },
  {
    "DESTINATION": "CANDLER PARK",
    "DIRECTION": "E",
    "EVENT_TIME": "2025-10-21T20:27:48Z",
    "HEAD_SIGN": "BANKHEAD",
    "LINE": "GREEN",
    "NEXT_ARR": "2025-10-21T20:35:00Z",
    "STATION": "BANKHEAD STATION",
    "TRAIN_ID": "201",
    "WAITING_SECONDS": "309",
    "WAITING_TIME": "1 min",
    "RESPONSETIMESTAMP": "2025-10-21T20:33:51Z",
    "VEHICLELONGITUDE": "33.772377",
    "VEHICLELATITUDE": "-84.429007",
    "DELAY": "T0S",
    "TRIP_ID": "2064"
  },
  {
    "DESTINATION": "CANDLER PARK",
    "DIRECTION": "E",
    "EVENT_TIME": "2025-10-21T20:27:48Z",
    "HEAD_SIGN": "ASHBY STREET",
    "LINE": "GREEN",
    "NEXT_ARR": "2025-10-21T20:38:40Z",
    "STATION": "ASHBY STATION",
    "TRAIN_ID": "201",
    "WAITING_SECONDS": "541",
    "WAITING_TIME": "5 min",
    "RESPONSETIMESTAMP": "2025-10-21T20:33:39Z",
    "VEHICLELONGITUDE": "33.772377",
    "VEHICLELATITUDE": "-84.429007",
    "DELAY": "T0S",
    "TRIP_ID": "2064"
  },
  {
    "DESTINATION": "CANDLER PARK",
    "DIRECTION": "E",
    "EVENT_TIME": "2025-10-21T20:27:48Z",
    "HEAD_SIGN": "VINE CITY",
    "LINE": "GREEN",
    "NEXT_ARR": "2025-10-21T20:39:40Z",
    "STATION": "VINE CITY STATION",
    "TRAIN_ID": "201",
    "WAITING_SECONDS": "602",
    "WAITING_TIME": "6 min",
    "RESPONSETIMESTAMP": "2025-10-21T20:33:37Z",
    "VEHICLELONGITUDE": "33.772377",
    "VEHICLELATITUDE": "-84.429007",
    "DELAY": "T0S",
    "TRIP_ID": "2064"
  },
]

const Train = ({id, data}: {id: number, data: {train: Train, line: Line}}) => {
    return ( <div key={id} className='w-full h-32 flex border-2 border-black'>
        <div className='flex items-center justify-center'>
          <div className='text-4xl p-4'>
           M
          </div>
        </div>
        <div className='flex-2 text-left flex flex-col justify-around'>
          <p>
            {data.train.STATION} {`-->`} {data.train.DESTINATION}
          </p>
          <p className='pt-2'>
            <span style={{backgroundColor: data.line.hexCode}} className='p-2'>{data.line.name}</span> {data.train.DELAY !== 'TOS' ? <span className='text-red-600'>Delayed</span> : <span className='text-green-600'>On Time</span>} 
          </p>
        </div>
        <div className='flex flex-1 items-center justify-center'>
          {data.train.WAITING_TIME}
        </div>
        
    </div> );
}
 
export default Train;