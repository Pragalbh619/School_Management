import React from 'react'
const School_staff = ({ details }) => {
    return (
        <>

            <div className='bg-[#FFFBF4]  flex flex-col justify-center items-center  ' >
                <h1 className='font-extrabold text-[44px] flex justify-center items-center py-10 '>School Staff</h1>
                <div className='w-[83%] mx-auto'>
                    <div className=' flex gap-[80px] grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ' >
                        {details.map((item) => {
                            return (
                                <>
                                    <div className=' rounded-2xl flex flex-col justify-between items-center col-span-1 '>
                                        <div className=' '>
                                            <img className='h-[300px] w-full ' src={item?.img} alt="" />
                                            <div className=' bg-white   w-full p-2 '>
                                                <h1 className='font-bold text-[18px] xl:text-[14px]'>{item?.name}</h1>
                                                <p className='text-gray-400 text-xs xl:text-[12px]'>{item?.jr}</p>
                                                <p className='text-gray-400 text-sm mt-4 xl:text-[12px] xl:w-[300px] lg:w-[250px] line-clamp-2'>{item?.des}</p>
                                            </div>
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
export default School_staff

