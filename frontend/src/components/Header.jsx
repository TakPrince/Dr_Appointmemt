import React from 'react'
import { assets } from "../assets/assets_frontend/assets.js";


const Header = () => {
    return (
        <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 relative md:min-h-[50vh] lg:min-h-[56vh]'>
            {/* left side */}
            <div className='md:w-1/2 flex flex-col justify-center items-start gap-4 py-8 md:py-12 lg:py-16'>
                <p className='text-3xl md:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointment <br /> With Truested Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors,
                        <br className='hidden sm:block' />schedule your appointment hassle-free.</p>
                </div>
                <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Book appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
            </div>
            {/* right side */}
            <div className='md:w-1/2 relative'>
                <img className='w-full h-auto rounded-lg mx-auto md:mx-0 md:absolute md:bottom-0 md:right-0 md:w-auto md:max-w-full max-h-[65vh] lg:max-h-[65vh] object-contain' src={assets.header_img} alt='Orange hospital building with appointment banner' />
            </div>
        </div>
    )
}

export default Header
