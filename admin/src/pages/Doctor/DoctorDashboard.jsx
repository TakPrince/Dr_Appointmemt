import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { assets } from '../../assets/assets_admin/assets'
import { AppContext } from '../../context/AppContext'



const DoctorDashboard = () => {
    const { getDashData, dashData, setDashData, dToken } = useContext(DoctorContext)


    const { courrency, slotDateFormate, } = useContext(AppContext)

    useEffect(() => {

        if (dToken) {
            getDashData()
        }

    }, [dToken])
    return dashData && (
        <div className='m-5'>
            <div className='flex flex-wrap gap-3'>
                <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 borer-gray-100 cursor-pointer hover:scale-105 transition-all duration-200'>
                    <img className='w-14' src={assets.earning_icon} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>{courrency}{dashData.earnings}</p>
                        <p className='text-gray-400 '>Earning</p>
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
                                className='rounded-full w-12 bg-gray-200'
                                src={item.userData?.image}
                                alt=""
                            />
                            <div className='flex-1 text-sm'>
                                <p className='text-gray-800 font-medium'>{item.userData?.name}</p>
                                <p className='text-gray-600'>
                                    {slotDateFormate(item.slotDate)} | {item.slotTime}
                                </p>
                            </div>


                            {
                                item.cancelled
                                    ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                                    : item.isCompleted
                                        ? <p className='text-green-500 text-xs font-medium'>Complited</p>
                                        : <div className='flex'>
                                            {/* <img onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer' src={assets.cancel_icon} alt="" />
                                            <img onClick={() => completeAppointment(item._id)} className='w-8 cursor-pointer' src={assets.tick_icon} alt="" /> */}
                                            <p className='text-gray-400 text-xs font-medium'>Up Coming</p>

                                        </div>

                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboard
