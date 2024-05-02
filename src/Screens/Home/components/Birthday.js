import React from 'react'
import { AppImages } from '../../../common/Images'
const Birthday = () => {
    return (
        <>
            <div className='bg-[#FFFCF2] h-[640px] relative ' >
                <img className='h-[556.44px] w-[194.71px] absolute top-[10%] left-[10%] lg:hidden' src={AppImages.b1} alt="" />

                <img className='h-[621.63px] w-[278.83px] absolute right-[3%] lg:hidden' src={AppImages.b3} alt="" />

                <div className='xs:flex xs:flex-col  xs:justify-center xs:items-center xs:pt-[40px] '>
                    <div className='  xs:flex xs:justify-center xs:items-center'>
                        <img className='xs:static h-[200px] w-[350px] sm:h-[30%] sm:w-[40%] absolute top-[36%] left-[23%]  xl:left-[23%] lg:top-[32%] lg:left-[10%] xs:h-[70%] xs:w-[70%]' src={AppImages.b2} alt="" />
                    </div>
                    <div className='xs:flex xs:flex-col xs:justify-center xs:items-center py-10 '>
                        <img className='xs:static xs:h-[70%] xs:w-[70%] h-[300px] w-[300px]  sm:h-[50%] sm:w-[40%] absolute top-[20%] left-[59%] ' src={AppImages.b4} alt="" />
                        <div className=''>
                            <p className='xs:static absolute top-[66%] right-[26%] font-extrabold text-[24px]  lg:right-[20%] sm:top-[68%] sm:right-[12%] xs:text-[20px] '>Arun Kumar</p>
                            <p className='xs:static absolute top-[70%] left-[66.5%] text-[16px] lg:left-[70%] sm:top-[72%] sm:left-[72%]'>Class VII</p>
                        </div>
                    </div>

                </div>
                <img className=' absolute top-[14%] left-[64.5%] h-[31px.05] w-[137.05px]  lg:hidden' src={AppImages.b5} alt="" />
                <img className=' absolute top-[27%] left-[48%] h-[126.84px] w-[93.49px] xxl:left-[51%] xl:left-[51%] lg:hidden' src={AppImages.b6} alt="" />
            </div>
        </>

    )
}
export default Birthday
