import React from 'react';

const ContactMe = () => {
  return (
    <div className='min-h-screen p-2 sm:p-8 w-full max-w-6xl '>
      <h1 className='font-poppins text-3xl sm:text-4xl font-bold text-center mb-2 sm:mb-2'>Contact Me</h1>
      <h6 className='font-poppins text-sm text-center mb-6 italic text-gray-500 sm:mb-8'>  I’m always excited about new opportunities and open to contributing my skills to dynamic teams. If you’re looking for a dedicated and adaptable professional, feel free to reach out.
      .</h6>
      <div className='w-full p-6 sm:p-8 bg-white rounded-lg shadow-lg'>
        <form action="https://formspree.io/f/mldedppa"
          method="POST" className='space-y-6'>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex-1'>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>Your Name</label>
              <input type='text' id='name' name='name' className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md' />
            </div>
            <div className='flex-1'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Your Email</label>
              <input type='email' id='email' name='email' className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md' />
            </div>
          </div>

          <div>
            <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-1'>Subject</label>
            <input type='text' id='subject' name='subject' className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md' />
          </div>

          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
            <textarea id='message' name='message' rows='6' className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md'></textarea>
          </div>

          <button type='submit' className='w-full px-4 py-3 bg-dirtyPinkTransparent hover:bg-dirtyPink text-black font-medium rounded-md transition-colors duration-300'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe