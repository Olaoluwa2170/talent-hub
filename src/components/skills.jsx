import CHESS from '../assets/images/chess.svg';
import DODGEBALL from '../assets/images/ball.svg';
import FRISBEE from '../assets/images/frisbee.svg';
import FOOTBALL from '../assets/images/soccer.svg';
import TABLETENNIS from '../assets/images/table-tennis-7216580_1280.webp';
import FireBase from '../assets/images/firebase.png';
import TENNIS from '../assets/images/tennis.svg';
import VOLLEYBALL from '../assets/images/volleyball.svg';
import MUSIC from '../assets/images/music.svg';

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4  w-full h-full flex flex-col justify-center'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-secondary '>Activities</p>
              <p className='py-4'>These are some of the avtivities we work with </p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={CHESS} alt="CHESS icon" />
                  <p className='my-4'>CHESS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={DODGEBALL} alt="HTML icon" />
                  <p className='my-4'>DODGEBALL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={FRISBEE} alt="HTML icon" />
                  <p className='my-4'>FRISBEE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={FOOTBALL} alt="HTML icon" />
                  <p className='my-4'>FOOTBALL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={TENNIS} alt="HTML icon" />
                  <p className='my-4'>TENNIS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={TABLETENNIS} alt="HTML icon" />
                  <p className='my-4'>TABLETENNIS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={MUSIC} alt="HTML icon" />
                  <p className='my-4'>MUSIC</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto ' src={VOLLEYBALL} alt="HTML icon" />
                  <p className='my-4'>VOLLEYBALL</p>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div> */}
          </div>
      </div>
    </div>
  );
};

export default Skills;