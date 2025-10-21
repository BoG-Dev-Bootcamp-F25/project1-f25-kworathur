import type { Line } from "../pages/LinesPage";



export const lines: Array<Line> = [
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

const NavBar = ({activeLine, setActiveLine} : {activeLine: Line, setActiveLine: (l: Line) => void}) => {
    return <div>
        <div className='flex justify-around'>
            {lines.map((l, i) => <button key={i} onClick={() => setActiveLine(l)} style={{backgroundColor: l.hexCode, borderWidth: activeLine.name === l.name ? '4px' : '2px'}} className={`text-white m-2 pt-2 pb-2 pr-8 pl-8 border-2 border-black hover:cursor-pointer`}>
                {l.name}
                </button>)}
        </div>
        <div className='text-center mt-2'>
            <h1 className='font-bold'>{activeLine.name.toUpperCase()}</h1>
        </div>
    </div>
}
 
export default NavBar;