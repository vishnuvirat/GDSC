import Logo from '../assets/logo.svg';
import Darkmode from '../assets/darkmode.svg';


const Homenavbar = () =>{
    return(
        <div className="flex p-2 pr-16 pl-16 ">
            <div className='p-4'>
                <img src={Logo} alt="GDSC logo" className='w-96 h-11' />
            </div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
            <div className='p-4 pl-7 pr-7'>
                <img src={Darkmode} alt="GDSC logo" className='w-10 h-9' />
            </div>
        </div>
    );
}

export default Homenavbar