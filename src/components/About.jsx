import img from '../assets/images/side.jpg'

const About = () => {
    return(
        <div name='about' className="w-full h-screen bg-primary text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 px-4 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-3xl font-bold inline border-b-4 border-secondary">ABOUT</p>
                    </div>
                    <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 px-4 gap-8">
                        <div className='relative'>
                            <p className="sm:text-right text-3xl text-gray-300 bg-primary rounded font-black absolute top-10 right-10">
                                Talent Discovery Complex
                            </p>
                            <img src={img} alt="" />
                        </div>
                    <div className="">
                        <p>
                        We're passionate about building and Discovering excellent talents that solves real-world problems and makes a positive impact on people's lives. With our skilled Trainers with expertise in alot of aspects, We specialize in designing, developing, and maintaining high-quality Talents. Check out Talents below.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About