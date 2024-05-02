import React from 'react'
import { AppImages } from '../../../common/Images'
const Upcoming_events = () => {
    return (
        <>
            <h1 className='font-extrabold flex justify-center text-[44px] mt-[81px] text-center'>Upcoming Events</h1>
            <div className='flex w-[83%] mx-auto my-[50px] xxl:my-10 xl:my-5 xl:mb-0 '>

                <div className='h-[678.47px]  bg-[#1B353D] rounded-2xl p-10 lg:hidden md:hidden sm:hidden xs:hidden '>
                    <div className=' w-[417.5px] '>
                        <div className='flex gap-3 m-4 my-7'>
                            <img className='' src={AppImages.apr12} alt="" />
                            <div>
                                <p className='text-white text-[24px] lg:text-[18px]'>Science Fair</p>
                                <div className='flex gap-1'>
                                    <img className='h-[20px] w-[20px]' src={AppImages.timer} alt="" />
                                    <p className='text-yellow-500'>3:00 PM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='flex gap-3  m-4 my-7 '>
                            <img className='' src={AppImages.may10} alt="" />
                            <div>
                                <p className='text-white text-[24px] lg:text-[18px]' >Literary Night</p>
                                <div className='flex gap-1'>
                                    <img className='h-[20px] w-[20px] ' src={AppImages.timer} alt="" />
                                    <p className='text-yellow-500'>7:00 PM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='flex gap-3  m-4 my-7 '>
                            <img className='' src={AppImages.jun20} alt="" />
                            <div>
                                <p className='text-white text-[24px] lg:text-[18px]'>Sports Carnival</p>
                                <div className='flex gap-1'>
                                    <img className='h-[20px] w-[20px]' src={AppImages.timer} alt="" />
                                    <p className='text-yellow-500'>10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='flex gap-3 m-4 my-7 '>
                            <img className='' src={AppImages.jun20} alt="" />
                            <div>
                                <p className='text-white text-[24px] lg:text-[18px]'>Sports Carnival</p>
                                <div className='flex gap-1'>
                                    <img className='h-[20px] w-[20px]' src={AppImages.timer} alt="" />
                                    <p className='text-yellow-500'>10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center '>
                            <div className='flex justify-center items-center rounded-full bg-[#FFB017] h-[58px] w-[285px] gap-4  lg:gap-2 '>
                                <button className='bg-[#FFB017]  rounded-full lg:text-[14px]'>View All Events</button>
                                <img className='h-[16px] w-[16px] ' src={AppImages.arrow_forward} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
         

                <div className='relative flex justify-center items-center '>
                    <div className=''>
                        <img className='h-[600px] w-[100%] xs:rounded-2xl ' src={AppImages.ue1} alt="" />
                    </div>
                    <div className=' absolute top-[60%] backdrop-blur-md text-white h-[137px]  xl:w-[65%] ' >
                        <div className='h-[107px]  p-[10px]  '>
                            <h1 className='h-[41px] w-[254px] text-[34px] font-bold xl:text-[28px] xs:text-[16px]'>Sports Carnival</h1>
                            <p className='text-[14px]  lg:line-clamp-1 xl:w-[50%] xl:line-clamp-2 xs:w-[80%]'>Cheer for teamwork and athleticism! Join the excitement ona day of sportsmanship.</p>
                            <div className='flex h-[20px] w-[174px]  lg:flex lg:justify-center lg:items-center lg:gap-1 lg:ml-[-10px] '>
                                <img className='xs:h-[12px] xs:w-[12px]' src={AppImages.timer1} alt="" />
                                <p className=' lg:text-[15px] xs:text-16px'>10:00 AM - 4:00 PM</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Upcoming_events