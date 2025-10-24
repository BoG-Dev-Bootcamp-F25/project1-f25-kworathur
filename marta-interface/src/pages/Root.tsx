import { Outlet } from "react-router-dom";
import NavLinks from "../components/NavLinks";

const Root = () => {
    return (<div className='h-full'>
        <NavLinks />
        <Outlet />
    </div>);
}
 
export default Root;