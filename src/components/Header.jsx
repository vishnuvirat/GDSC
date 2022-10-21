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
                    <div className=''>Home</div>
                    <div className=''>Updates</div>
                    <div className=''>Learn</div>
                    <div className=''>Team</div>
                    <div className=''>Contact Us</div>
                </div>
            </div>
        </navbar>
    )
}

export default Header