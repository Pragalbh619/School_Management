import React from 'react'
import { AppImages } from '../../../common/Images'
const Latest_news = ({ d1 }) => {
    return (
        <>
            <div className='bg-[#F7F8FD]  '>
                <h1 className='font-extrabold text-[44px] text-center py-5 '>Latest News</h1>
                <div className='flex w-[83%] mx-auto  pb-2 gap-4 md:flex md:flex-col '>  
                    <div className='bg-white  p-4 flex flex-col xs:hidden 
                     '>
                        <img src={AppImages.ln1} alt="" />
                        <p className='text-[12px] leading-[14.52px] text-[#8E8E8E]'>January 15, 2024</p>
                        <p className='text-[16px]  font-bold'>Thank You for Bringing in Those Toys</p>
                        <p className='text-[16px] leading-[19.36px] text-[#585858]'>We can pioneer a curriculum in which academic challenge and happiness thrive side by side. Et harum quidem…</p>
                    </div>
                    <div className=''>
                        {d1.map((n1) => {
                            return (
                                <>
                                    <div className='bg-white border  p-3 lg:p-1 flex gap-[14px]  xs:p-0  '>
                                        <div><img className='h-[98px] w-[138px]  ml-2   lg:mt-2' src={n1?.img} alt="" /></div>
                                        <div className='flex flex-col w-[300px] mt-2'>
                                            <div className='text-[12px] leading-[14.52px] text-[#8E8E8E]'>{n1?.date}</div>
                                            <div className='text-[16px]  font-bold xl:text-[12px]'>{n1?.heading}</div>
                                            <div className='text-[14px] leading-[19.36px] text-[#585858] xl:text-[12px] xs:line-clamp-1'>{n1?.description}</div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Latest_news