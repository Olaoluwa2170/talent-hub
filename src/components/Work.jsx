import engr from '../assets/images/zion.jpg'
import alien from '../assets/images/Cristiano_Ronaldo.jpg'

const Work = () => {
    return (
      <div name='work' className='w-full bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4  w-full flex flex-col justify-center'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-secondary '>Talents</p>
                <p className='py-4'>Meet Some of Our Great Talents</p>
            </div>

            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 "> 
            {/* grid items */}
                <div style={{backgroundImage:`url(${engr})`}} 
                className="shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                    <span className='text-secondary'>Name:</span> Zion
                        </span>
                        <div className="pt-8 text-center">
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large' >
                                                Basketballer
                                    </button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>
                                            Read More
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>

                {/* grid items */}
                <div style={{backgroundImage:`url(${alien})`}} 
                className="shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <span className='text-secondary'>Name:</span> GOAT
                        </span>
                        <div className="pt-8 text-center">
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large' >
                                            Footballer
                                    </button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>
                                            Read More
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>

                {/* grid items */}
                <div style={{backgroundImage:`url(${engr})`}} 
                className="shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                    <span className='text-secondary'>Name:</span> Zion
                        </span>
                        <div className="pt-8 text-center">
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large' >
                                                Basketballer
                                    </button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>
                                            Read More
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>
                
                {/* grid items */}
                <div style={{backgroundImage:`url(${alien})`}} 
                className="shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <span className='text-secondary'>Name:</span> GOAT
                        </span>
                        <div className="pt-8 text-center">
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large' >
                                            Footballer
                                    </button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>
                                            Read More
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>
                {/* grid items */}
                <div style={{backgroundImage:`url(${engr})`}} 
                className="shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                    <span className='text-secondary'>Name:</span> Zion
                        </span>
                        <div className="pt-8 text-center">
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large' >
                                                Basketballer
                                    </button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>
                                            Read More
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>
                
                {/* grid items */}
                <div style={{backgroundImage:`url(${alien})`}} 
                className="shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <span className='text-secondary'>Name:</span> GOAT
                        </span>
                        <div className="pt-8 text-center">
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large' >
                                            Footballer
                                    </button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>
                                            Read More
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
            )}

export default Work


