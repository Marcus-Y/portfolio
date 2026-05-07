import Theme from './Theme'
function Navbar(){
    return (
        <>
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-1000">
        {/* minimized screen size */}
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-[100px] p-2 shadow border">
                <li className='py-4 justify-center'><a className='w-[80%] justify-center' href="/portfolio">Home</a></li>
                <li className='py-4 justify-center'><a className='w-[80%] justify-center' href='https://github.com/marcus-y'> <img className='icon' src='https://cdn-icons-png.flaticon.com/128/2111/2111432.png' alt='GitHub'></img></a></li>
            </ul>
            </div>
        </div>

        {/* normal screen size */}
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li className='px-4 justify-center'><a href="/">Home</a></li>
            <li className='px-4'><a className='w-[40%] justify-center' href='https://github.com/marcus-y'> <img src='https://cdn-icons-png.flaticon.com/128/2111/2111432.png' alt='GitHub'></img></a></li>
            </ul>
        </div>
        {/* right end of the navbar */}
        <div className="navbar-end">

        <Theme/>
        </div>
        </div>
        </>
    );
}

export default Navbar