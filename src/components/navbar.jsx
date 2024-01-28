import { Link } from "react-router-dom"

const Navbar = () => {

    return <>
        <header className="bg-[#ff933b] sticky top-0 z-10 py-[10px] flex flex-wrap md:items-center md:justify-around  ">
            <div className="text-[24px] px-[10px] text-[white]  tracking-[2px] w-[100%] md:w-[30%] flex item-center justify-between  ">
                <h3 className="font-semibold uppercase ">Task<span className="lowercase">.com</span></h3>
                <div className="md:hidden " >
                    <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#c0c0c0" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </div>
            </div>
            <div className="  w-[100%] md:w-[60%] mt-2 md:mt-0 " >
                <ul className=" flex  flex-col md:flex-row md:justify-end  gap-[1rem] md:gap-[1.5rem] px-[20px] ">
                    <li className="list-none">
                        <Link to="/" className="text-[16px] font-semibold no-underline text-[white] tracking-[1px] relative block py-[4px] uppercase duration-500 hover:text-[#fffc5b]">Home</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/About" className="text-[16px] font-semibold no-underline text-[white] tracking-[1px] relative block py-[4px] uppercase duration-500  hover:text-[#fffc5b]">About</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/Contact" className="text-[16px] font-semibold  no-underline text-[white] tracking-[1px] relative block py-[4px] uppercase duration-500  hover:text-[#fffc5b]">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </header>
    </>
}

export default Navbar