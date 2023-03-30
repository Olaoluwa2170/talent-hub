const Contact = () => {
    return (
      <div name='contact' className='w-full md:h-[768px] bg-[#0a192f] flex justify-center items-center p-4 '>
          <form method='POST' action="https://getform.io/f/1acf19e9-d5b3-45e2-a47c-32b559807e00" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-secondary text-gray-300'>Contact Us</p>
                  <p className='text-gray-300 py-4'>Submit your proposal below or shoot us an email - talentabuad@gmail.com</p>
              </div>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-secondary hover:border-secondary px-4 py-3 my-8 mx-auto flex items-center'>Let's Build</button>
          </form>
      </div>
    )
  }
  
  export default Contact