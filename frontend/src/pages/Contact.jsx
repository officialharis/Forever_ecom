import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewletterBox'

const Contect = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-600'>481449 Forest Station <br />Meeting point, Balaghat (M.P.), IND</p>
          <p className='text-gray-600'>Tel: (133) 201-0013 <br />Email: contact@forever.in</p>
          <p className='font-semibold text-xl text-gray-600'>Career at Forever</p>
          <p className='text-gray-600'>Learn more about our teams and job openings</p>
          <button className='border boder-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duaration-500'>Explore Jobs</button>

        </div>  
      </div>
        <NewletterBox/>
    </div>
  )
}

export default Contect