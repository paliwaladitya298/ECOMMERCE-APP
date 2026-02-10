import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1 = {'ABOUT'} text2 = {'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src = {assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
       <p>Forever is a modern e-commerce platform designed to make online shopping simple, fast, and reliable. We offer a wide range of quality products with a smooth and secure shopping experience. From browsing products to completing payments, Forever ensures convenience at every step.</p>
       <p>Forever is more than just an online store — it's a place where quality meets trust. We carefully curate our products to ensure value, style, and reliability for every customer. With an easy-to-use interface and a smooth checkout process, shopping at Forever is effortless and enjoyable.
        Our goal is to build long-lasting relationships with our customers by offering dependable service, timely delivery, and responsive support.</p>
       <b className='text-gray-800'>Our Mission</b>
       <p>Our mission is to make online shopping simple, trustworthy, and enjoyable for everyone. We strive to offer high-quality products, fair pricing, and a smooth shopping experience from start to finish.</p>
      </div>
      </div>
     <div className='text-xl py-4'>
       <Title text1 = {'WHY'} text2 ={'CHOOSE US'}/>
     </div>
     <div className='flex flex-col  md:flex-row text-sm mb-20'>
      <div className='border border-gray-400 px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5'>
       <b>Quality Assurance:</b>
       <p className= 'text-gray-600'>At Forever, quality is at the heart of everything we offer. Every product goes through careful checks to ensure it meets our standards for durability, performance, and reliability before reaching our customers.</p>
      </div>
       <div className='border border-gray-400 px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5'>
       <b>Convenience:</b>
       <p className= 'text-gray-600'>Forever is designed to make shopping easy and stress-free. From effortless browsing to a smooth checkout process, every step is created with your comfort in mind.</p>
      </div>
       <div className='border border-gray-400 px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5'>
       <b>Exceptional Customer Service:</b>
       <p className= 'text-gray-600'>At Forever, our customers come first. We are dedicated to providing friendly, responsive, and reliable support at every step of your shopping journey.</p>
      </div>
     </div>
     <NewsletterBox/>
    </div>
  )
}

export default About