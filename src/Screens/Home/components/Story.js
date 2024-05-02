import React from 'react'
import { AppImages } from '../../../common/Images'
import App from '../../../App'
const Story = () => {
    return (
        <>
            <div className=''>
                <div className='font-extrabold text-[44px] text-center py-5'>What our <span class="text-[#FFB017] underline  ">Parents {"\n"}</span> say about us </div>

                <div className='flex gap-5 w-[83%] mx-auto grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                    <div className='border-2 rounded-2xl  p-5 '>
                        <div className='flex gap-5 col-span-1 '>
                            <div>
                                <img className='' src={AppImages.pl} alt="" />
                            </div>
                            <div>
                                <p className='font-bold'>Mohh Jumah</p>
                                <p className='text-blue-700'>CEO</p>
                            </div>

                        </div>

                        <p className='pt-10 sm:line-clamp-5'>“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”</p>
                    </div>

                    <div className='border-2 rounded-2xl  p-5 col-span-1 '>
                        <div className='flex gap-5'>
                            <div>
                                <img className='' src={AppImages.pl} alt="" />
                            </div>
                            <div>
                                <p className='font-bold'>Mohh Jumah</p>
                                <p className='text-blue-700'>Architect</p>
                            </div>

                        </div>

                        <p className='pt-10 sm:line-clamp-5'>“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”</p>
                    </div>

                    <div className='border-2 rounded-2xl relative col-span-1 h-[300px]'>
                        <div className='flex gap-5 p-4'>
                            <div>
                                <img className='h-[35px] w-[35px] ' src={AppImages.pl} alt="" />
                            </div>
                            <div >
                                <p className='font-bold text-xs'>Mohh Jumah</p>
                                <p className='text-blue-700 text-xs'>Designer</p>
                            </div>

                        </div>
                        <div >
                            <div className=''>
                                <img className=' h-[200px] w-full flex justify-center items-center '  src={AppImages.bgs11} alt="" />
                            </div>
                            <div className='absolute top-[50%] left-[42%] '>
                                <img src={AppImages.youtube_icon} alt="" />
                            </div>
                        </div>



                    </div>
                </div>

            </div>

        </>
    )
}
export default Story