import logo from "../assets/images/logo.png"
import {FaBars, FaFacebook, FaInstagram, FaTimes} from 'react-icons/fa' 
import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa/index.esm"
import { HiOutlineMail } from "react-icons/hi"
import { GrTwitter } from 'react-icons/gr'
import { Link } from "react-scroll"


const NavBar = () => {
    const [nav, Setnav] = useState(false)
    const handleClick = () => {
        Setnav(!nav)
    }
    return(
    <>
        
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary">
            <div>
                <img src={logo} alt="" className="w-[50px] "/>
            </div>

        <div>
            <ul className=" md:flex hidden">
                <li className="text">
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className="text">
                <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className="text">
                <Link to="skills" smooth={true} duration={500} >
                        Skill
                    </Link>
                </li>
                <li className="text">
                <Link to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className="text">
                <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* Hamborger */}
        <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            
            <li className="py-6 text-xl">
                    <Link to="home" smooth={true} duration={500} >
                        <p onClick={handleClick}>Home</p>
                    </Link>
                </li>
                <li className="py-6 text-xl">
                <Link to="about" smooth={true} duration={500} >
                        <p onClick={handleClick}>About</p>
                    </Link>
                </li>
                <li className="py-6 text-xl">
                <Link to="skills" smooth={true} duration={500} >
                        <p onClick={handleClick}>Skill</p>
                    </Link>
                </li>
                <li className="py-6 text-xl">
                <Link to="work" smooth={true} duration={500} >
                        <p onClick={handleClick}>Work</p>
                    </Link>
                </li>
                <li className="py-6 text-xl">
                <Link to="contact" smooth={true} duration={500} >
                        <p onClick={handleClick}>Contact</p>
                    </Link>
                </li>
        </ul>

        <div className="lg:flex hidden fixed flex-col top-[35%] left-0">
            <ul>
                <li className="media bg-blue-500">
                    <a href="https://www.linkedin.com/in/elisha-babalola-python-dev/" target={"_blank"} className="flex justify-between pt-2 items-center text-gray-100">
                        Instar <FaInstagram size={30}/>
                    </a>
                </li>
                <li className="media bg-gray-700">
                    <a href="https://github.com/Olaoluwa2170" target={"_blank"} className="flex justify-between pt-2 items-center text-gray-100">
                        GitHub <FaFacebook size={30}/>
                    </a>
                </li>
                <li className="media bg-red-400">
                    <a href="" target={"_blank"} className="flex justify-between pt-2 items-center gap-5 text-gray-100">
                        Mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className="media bg-blue-500">
                    <a href="" target={"_blank"} className="flex justify-between pt-2 items-center gap-5 text-gray-100">
                        Twitter <GrTwitter size={30}/>
                    </a>
                </li>
            </ul>
        </div>
        </div>

        

    </>)
}

export default NavBar