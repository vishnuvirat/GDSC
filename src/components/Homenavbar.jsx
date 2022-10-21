import Logo from '../assets/logo.svg';
import Darkmode from '../assets/darkmode.svg';


const Homenavbar = () =>{
    return(
        <Homenavbar className="">
            <div className='p-4'>
                    <img src={Logo} alt="GDSC logo" className='w-96 h-11' />
            </div>
            <div className='pl-7 pr-7'>
                    <img src={Darkmode} alt="GDSC logo" className='w-10 h-9' />
            </div>
        </Homenavbar>
    );
}

export default Homenavbar