import Logo from '../assets/logo.svg';
import Darkmode from '../assets/darkmode.svg';

const Navbar = () =>{
    return(
        <navbar className="">
            <div className='flex p-2 items-center pr-16 pl-16'>
                <div className='p-4'>
                    <img src={Logo} alt="GDSC logo" className='w-96 h-11' />
                </div>
                <div className='flex-1'></div>
                <div className='flex pr-8'>
                    <div className='font-bold text-xl p-4 pl-7 pr-7'>Home</div>
                    <div className='font-bold text-xl p-4 pl-7 pr-7'>Updates</div>
                    <div className='font-bold text-xl p-4 pl-7 pr-7'>Learn</div>
                    <div className='font-bold text-xl p-4 pl-7 pr-7'>Team</div>
                    <div className='font-bold text-xl p-4 pl-7 pr-7'>Contact Us</div>  
                </div>
                <div className='pl-7 pr-7'>
                    <img src={Darkmode} alt="GDSC logo" className='w-10 h-9' />
                </div>
            </div>
        </navbar>
    )
}

export default Navbar