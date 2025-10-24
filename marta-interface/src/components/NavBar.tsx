import { Link } from "react-router-dom";
import type { Line } from "../pages/LinesPage";



export const lines: Array<Line> = [
    {
        name: 'gold',
        hexCode: '#b38702ff'
    },
    {
        name: 'red',
        hexCode: '#ff0202ff'
    },
    {
        name: 'blue',
        hexCode: '#0235ffff'
    },
    {
        name: 'green',
        hexCode: '#05851aff'
    }
]

const NavBar = ({activeLine} : {activeLine: Line}) => {
    console.log(activeLine)
    return <div>
        {
            activeLine &&  <div className='flex justify-around'>
            {lines.map((l, i) => <Link to={`/lines/${l.name}`} ><div key={i} style={{backgroundColor: l.hexCode, borderWidth: activeLine.name === l.name ? '4px' : '2px'}} className={`text-white m-2 pt-2 pb-2 pr-8 pl-8 border-2 border-black hover:cursor-pointer`}>
                {l.name.at(0)?.toUpperCase() + l.name.slice(1)}
                </div></Link>)}
        </div>
        }
        {
            activeLine && <div className='text-center mt-2'>
            <h1 className='font-bold'>{activeLine.name.toUpperCase()}</h1>
        </div>
        }
        
    </div>
}
 
export default NavBar;