import { Link } from "react-router-dom";

const NavLinks = () => {
    return ( 
         <div className='flex'>
            <div className='ml-2 underline'>
                <Link to="/">Home</Link>
            </div>
            <div className='ml-2 underline'>
                <Link to="/about">About</Link>
            </div>
        </div>
     );
}
 
export default NavLinks;