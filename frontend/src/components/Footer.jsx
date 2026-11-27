import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* Left section */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                        We have 21 doctors listed in Orange Hospital with comprehensive information about the doctor including qualification, experience, education, procedures and conditions treated, expertise and more. You can search Orange Hospital doctors list by name or speciality.
                    </p>
                </div>

                {/* Middle section */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600 cursor-pointer'>
                        <li className='hover:text-gray-900 transition'>Home</li>
                        <li className='hover:text-gray-900 transition'>About us</li>
                        <li className='hover:text-gray-900 transition'>Contact us</li>
                        <li className='hover:text-gray-900 transition'>Privacy policy</li>
                    </ul>
                </div>

                {/* Right section */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>🏢  Thakor Wadi Street,<br /> Beside H.P. Petrol Pump,<br /> Station Road, <br />Navsari - 396445 </li>
                        <li>📩 drbbh@yahoo.in</li>
                        <li>📞 (02637) 245500 / 242200 </li>
                        <li>📞  +91 63549 10363 </li>
                    </ul>
                </div>
            </div>

            {/* Bottom section */}
            <div>
                <hr className='border-gray-300' />
                <p className='py-5 text-sm text-center text-gray-600'>
                    © 2025 All rights reserved | This template is made with ❤️ by Prince
                </p>
            </div>
        </div>
    )
}

export default Footer;
