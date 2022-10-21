import Logo from '../assets/logo.svg';

const Header = () =>{
    return(
        <navbar className="">
            <div className='flex'>
                <div className='p-4'>
                    <img src={Logo} alt="GDSC logo" className='w-96' />
                </div>
                <div className='flex-1'></div>
                <div className='flex'>
                    <div className='font-bold text-lg p-4 '>Home</div>
                    <div className='font-bold text-lg p-4 '>Updates</div>
                    <div className='font-bold text-lg p-4 '>Learn</div>
                    <div className='font-bold text-lg p-4 '>Team</div>
                    <div className='font-bold text-lg p-4 '>Contact Us</div>
                </div>
            </div>
        </navbar>
    )
}

export default Header