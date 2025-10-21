import type { Line } from "../pages/LinesPage";



const lines = [
    {
        name: 'Gold',
        hexCode: '#b38702ff'
    },
    {
        name: 'Red',
        hexCode: '#ff0202ff'
    },
    {
        name: 'Blue',
        hexCode: '#0235ffff'
    },
    {
        name: 'Green',
        hexCode: '#05851aff'
    }
]

const NavBar = ({activeLine} : {activeLine: Line}) => {
    return <div>
        <div className='flex justify-around'>
            {lines.map(l => <button style={{backgroundColor: l.hexCode}} className={`text-white m-2 pt-2 pb-2 pr-8 pl-8 border-2 border-black `}>{l.name}</button>)}
        </div>
        <div className='text-center'>
            {activeLine.toUpperCase()}
        </div>
    </div>
}
 
export default NavBar;