import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>"Our About page tells the story of our company—from humble beginnings to where we are today. We share our mission to deliver sustainable products, our commitment to quality, and the values that drive our team. It’s a place where visitors can learn more about who we are and why we do what we do."</p>
          <p>An "About" page is a key section of a website that provides visitors with important information about the individual, company, brand, or organization behind the site. It explains who you are, what you do, why you do it, and often how you got started.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>"Our mission is to empower businesses and individuals through innovative web development. We aim to deliver high-quality, secure, and scalable solutions that not only meet our clients’ needs but also exceed their expectations. We believe in clean code, smart design, and a commitment to continuous improvement."</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600 '>"We ensure every product meets high standards of performance, reliability, and user satisfaction through thorough testing and review."</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600 '>"We prioritize convenience by delivering fast, easy-to-use solutions that save time and simplify your experience."</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600 '>"We’re committed to providing fast, friendly, and reliable support to ensure every customer feels valued and heard."</p>
        </div>

      </div>
      <NewletterBox/>

    </div>
  )
}

export default About