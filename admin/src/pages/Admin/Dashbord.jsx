import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets_admin/assets';
import { AppContext } from '../../context/AppContext';

const Dashbord = () => {
    const { aToken, dashData, getDashData, cancelAppointment } = useContext(AdminContext);
    const { slotDateFormate } = useContext(AppContext)

    useEffect(() => {
        if (aToken) {
            getDashData();

        }
    }, [aToken]);

    return dashData && (
        <div className='m-5'>
            <div className='flex flex-wrap gap-3'>
                <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 borer-gray-100 cursor-pointer hover:scale-105 transition-all duration-200'>
                    <img className='w-14' src={assets.doctor_icon} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashData.doctors}</p>
                        <p className='text-gray-400 '>Doctors</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 borer-gray-100 cursor-pointer hover:scale-105 transition-all duration-200'>
                    <img className='w-14' src={assets.appointments_icon} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
                        <p className='text-gray-400' >Appointments</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 borer-gray-100 cursor-pointer hover:scale-105 transition-all duration-200'>
                    <img className='w-14' src={assets.patients_icon} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
                        <p className='text-gray-400'>Patients</p>
                    </div>
                </div>



            </div>
            <div className='bg-white'>
                <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border-b'>
                    <img src={assets.list_icon} alt="" />
                    <p className='font-semibold'>Latest Bookings</p>
                </div>
                <div className='p-4 border border-t-0'>
                    {dashData.latestAppointment?.map((item, index) => (
                        <div key={index} className='flex item-center px-6 py-3 gap-3 hover:bg-gray-100 '>
                            <img
                                className='rounded-full w-16 bg-gray-200'
                                src={item.docData?.image}
                                alt="Doctor"
                            />
                            <div className='flex-1 text-sm'>
                                <p className='text-gray-800 font-medium'>{item.docData?.name}</p>
                                <p className='text-gray-600'>
                                    {slotDateFormate(item.slotDate)} | {item.slotTime}
                                </p>
                            </div>


                            {item.cancelled ? (
                                <span className='text-red-500 text-sm font-medium'>Cancelled</span>
                            ) : (
                                <button
                                    onClick={async () => {
                                        await cancelAppointment(item._id)
                                        window.location.reload()
                                    }

                                    }
                                    className=' p-2 text-red-500 hover:bg-red-50 rounded-full'
                                >
                                    <img className='w-10' src={assets.cancel_icon} alt="Cancel" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashbord
