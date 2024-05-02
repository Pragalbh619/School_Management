import React from 'react'
import { AppImages } from '../../../common/Images'

const Announcements = () => {
    return (
        <>
            <div>
                <div className=' w-[100%]'>
                    <img className='w-full relative h-[686px] grayscale xs:h-[400px]  sm:h-[500px]' src={AppImages.bg_img1} alt="" />
                </div>

                <div className=' w-[40%] absolute top-[30%] left-[10%]'>
                    <div className=''>
                        <h1 className='  text-[50px]  font-bold text-white leading-[60.51px] xs:text-[26px] xs:leading-[35px]  sm:text-[32px] sm:hidden' >Design the Future of Education Websites
                            Effortlessly.</h1>
                    </div>

                    <div className=' ' >
                        <p className='text-white sm:text-[32px] xs:w-[300px]  pt-2'>We are also available on</p>
                    </div>

                    <div className=' flex pt-5'>
                        <img className='xs:h-[35px] xs:w-[80px] ' src={AppImages.google_play} alt="" />
                        <img className='xs:h-[35px] xs:w-[80px]' src={AppImages.app_store} alt="" />
                    </div>
                </div>

                <div className='absolute top-[25%] right-[10%] text-white backdrop-blur rounded-4xl xl:hidden lg:hidden'>
                    <h1 className='text-[27.71px] pl-2'>Announcements</h1>
                    <div className='flex justify-center items-center h-[71px] w-[361px] gap-2'>
                        <img src={AppImages.jan10} alt="" />
                        <p>School will be close on this to this Date</p>
                    </div>
                    <div className='flex justify-center items-center h-[71px] w-[361px] gap-2 bg-[#FFB017] text-black rounded-xl'>
                        <img src={AppImages.jan08} alt="" />
                        <p>School will be close on this to this Date</p>
                    </div>
                    <div className='flex justify-center items-center h-[71px] w-[361px] gap-2'>
                        <img src={AppImages.jan05} alt="" />
                        <p>School will be close on this to this Date</p>
                    </div>
                    <div className='flex justify-center items-center h-[71px] w-[361px] gap-2'>
                        <img src={AppImages.jan04} alt="" />
                        <p>School will be close on this to this Date</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Announcements