import React from 'react'
import { AppImages } from '../../../common/Images'
const Gallery = ({ gdata }) => {
    return (
        <>
            <h1 className='font-extrabold text-[44px] flex justify-center items-center pt-[50px] py-10 lg:py-5'>Gallery</h1>
            <div className='flex w-[77%] mx-auto  gap-5 md:flex md:flex-col '>
                <div className=' relative xs:hidden'>
                    <img className='h-full   w-full' src={AppImages.g1} alt="" />
                    <p className='absolute top-[92%] left-[30px] text-white font-bold'>Campus(16)</p>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                {gdata.map((gd1) => {
                    return (
                        <>
                            <div className='relative'>
                                <div><img className='h-full w-full' src={gd1?.img} alt="" /></div>
                                <div className='absolute top-[88%] left-[20px] text-white font-bold xs:top-[80%]'>{gd1?.text}</div>
                            </div>
                        </>
                    )
                })}
                </div>
            </div>
        </>
    )
}
export default Gallery