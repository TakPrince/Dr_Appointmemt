import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'><p>About <span className='text-gray-700 font-medium'>US</span></p></div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p> Orange Hospital was established by Dr. B.B. Hirpara (M.S.) in 2011. He has been running Shivani Surgical Hospital in Navsari for 18 years. He is the pioneer of Orange Hospital.</p>
                    <p>He is doing all routine and advance Laproscopic surgeries, Endoscopy and advanced Urological surgeries. He has experience of more than 15000 surgeries. </p>
                    <p> We have 21 doctors listed in Orange Hospital with comprehensive information about the doctor including qualification, experience, education, procedures and conditions treated, expertise and more. You can search Orange Hospital doctors list by name or speciality.
                    </p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>Building a healthier tomorrow through better healthcare today.

                        To deliver accessible, advanced and compassionate healthcare while continuously improving medical standards and patient experiences.</p>
                </div>
            </div>

            <div className='text-xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE</span> US</p>
            </div>

            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'><b>ADVANCED HEALTHCARE:</b><p>Access modern medical facilities and specialised healthcare services at Orange Hospital</p></div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'><b>EXPERT SPECIALITIES:</b><p>Explore multiple medical departments and connect with doctors across different specialities.</p></div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'><b>EASY APPOINTMENTS:</b><p>Book doctor appointments conveniently, choose your preferred available time slot, and manage your visits.</p></div>
            </div>

        </div>

    )
}

export default About
