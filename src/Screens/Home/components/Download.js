import React from 'react'
import { AppImages } from '../../../common/Images'

const Download = () => {
    return (
        <>

            <div className='bg-[#FFB017]  mt-[80px] border-2 rounded-3xl relative h-[540px]  '>
                <div className='flex h-full '>
                    <div className='flex flex-col w-[30%] justify-around h-full ml-[60px] '>
                        <div></div>
                        <div className='font-bold text-[40px] leading-[48.41px] md:line-clamp-5 sm:line-clamp-5 md:text-[20px] '>
                            <p> Download to access all about the school with just one App</p>
                           
                        </div>

                        <div className=' flex gap-2 lg:h-[50px]'>
                            <img src={AppImages.google_play} alt="" />
                            <img src={AppImages.app_store} alt="" />
                        </div>
                    </div>
                    <div className='absolute z-10 bottom-[-15px] right-0 max-h-[699px] xl:h-[650px] xl:w-[500px] lg:h-[520px] lg:w-[400px] md:hidden'>
                        <img src={AppImages.mobile} alt="" />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Download