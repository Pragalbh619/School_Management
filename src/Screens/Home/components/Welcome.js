import React from 'react'
import { AppImages } from '../../../common/Images'

const Welcome = () => {
   
  
    return (
        <>
            <div className=' flex py-20 w-[85%] mx-auto  xxl:py-[25px]'>
                <div className='py-20  md:py-0 md:pb-5 '>
                    <h1 className='text-[44px]  w-[471.15px] font-bold xs:text-[32px] md:w-full md:h-[20%] md:text-[36px]'>Welcome to Greenwood School</h1>
                    <div className='w-[50%] md:w-full xs:py-2'>
                        <p className='py-10 xs:py-1 text-[16px] text-[#545454]  '>Greenwood School, where education seamlessly intertwines with the serenity of nature. Situated in the heart of the picturesque countryside, Greenwood School offers an extraordinary environment for students to flourish and develop holistically. <br />We are dedicated to providing a holistic and student-centric education that extends beyond conventional classroom boundaries.</p>
                    </div>
                    <div className='flex justify-center items-center rounded-full bg-[#FFB017] w-[185px] gap-2 px-4 py-4'>
                        <button className='text-[16px] xs:text-[12px]'>Find out more</button>
                        <img className='h-[13px] w-[13px] ' src={AppImages.arrow_outward} alt="" />
                    </div>
                </div>

                <div className='flex flex-col relative xs:hidden md:hidden'>
                    <div className='bg-green-200 rounded-full flex justify-center items-center h-[338.39px] w-[341.26px] absolute top-[13%] right-[10%]'>

                       <div>
                            <div className='relative flex justify-center items-center h-[438.39px] w-[375.04px]'><img src={AppImages.t1} alt="" /></div>
                        </div>

                        <div className=''>
                            <img className=' h-[57.71px] w-[114.42px] absolute top-[26%] left-[-11%]' src={AppImages.t2} alt="" />
                        </div>

                        <div className=' h-[129.35px] w-[138.3px] absolute top-[43%] left-[83%]'>
                            <img src={AppImages.t3} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Welcome

