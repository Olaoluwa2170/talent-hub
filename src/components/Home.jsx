import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import img from '../assets/images/home.jpg'

const Home = () => {
    return (
        
        <div name='home' className="w-full h-screen bg-primary">
            {/* Container */}
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center p-8 h-full'>
                    <div className="md:grid md:grid-cols-3 gap-5">
                        <div className='md:col-span-2'>
                            <p className='text-secondary font-bold'>Welcome to the,</p>
                            <h1 className='text-4xl text-gray-200 font-bold py-2'>Talent Discovery Center</h1>
                            <h2 className='text-4xl text-gray-400 font-bold'>Here we discover Talents</h2>
                            <p className='text-gray-400 max-w-[700px] py-4'>here we discover great Talents Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quaerat corrupti sint quo, modi voluptas enim sed earum odit quis libero, incidunt aliquid voluptate aut possimus quibusdam quia sequi quasi?
                            </p>
                            <div>
                                <button className='group border-2 px-6 my-2 py-3 flex items-center hover:bg-[#8F1C13] hover:border-[#8F1C13] duration-300'><Link to="work" smooth={true} duration={500} >
                                View our Talents
                            </Link>
                                <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight className='ml-3'/>
                                </span>
                                </button></div>
                        </div>
                        <div style={{backgroundImage:`url(${img})`}}  className='content rounded md:block hidden'>
                            
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default Home