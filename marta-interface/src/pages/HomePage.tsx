import { Link } from "react-router-dom";
import { lines } from "../components/NavBar";

const HomePage = () => {
    return ( <div className='text-center mt-2'>
            <h1 className='font-bold'>MARTA Interface</h1>
            <div className='w-full m-4 flex content-center items-center'>
                <div className="flex-1">
                    {lines.map(l => {
                        return <Link to={`/lines/${l.name}`}><h2 className='text-left text-lg p-16 underline'>{l.name.at(0)?.toUpperCase() + l.name.slice(1)}</h2></Link>
                    })}
                </div>
                <div className="flex-1">
                    <img src='MARTA_Signature.png' alt='Picture of a marta train' />
                </div>
            </div>
        </div> );
}
 
export default HomePage;