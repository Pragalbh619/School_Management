import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Academics = ({ data }) => {
  

    return (
        <div className='my-[20px] mx-auto w-[85%]'>
            <h1 className='font-extrabold text-[44px] flex justify-center items-center py-10 '>Academics</h1>
            {/* // <Slider {...settings}> */}

            <div className=' gap-5 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {data.map((a, index) => (
                    <div key={index} className=' col-span-1 '>
                        <img className='h-[340px] lg:h-[300px]  w-full  ' src={a?.main_img} alt="" />
                        <div className='h-[24px] text-[20px] bg-yellow-500 font-bold flex justify-center items-center py-8  lg:text-[16px]'>{a?.title}</div>
                        <div className=' gap-[10px] flex flex-col mt-2  items-center'>
                            {/* <div className='h-[9px] w-[9px] flex justify-center items-center gap-3 ' >{a?.more1} <img className='flex justify-center items-center' src={a?.m_img} alt="" /></div>
                                <div className='h-[9px] w-[9px] flex justify-center items-center gap-3'>{a?.more2} <img src={a?.m_img2} alt="" /></div> */}
                            <span className='flex flex-row  items-center gap-[10px]'>{a?.more1} <img src={a?.m_img2} className='h-[9px] w-[9px] flex justify-center items-center gap-3' alt="" /></span>

                            <span className='flex flex-row items-center gap-[10px]'>{a?.more2} <img src={a?.m_img2} className='h-[9px] w-[9px] flex justify-center items-center gap-3' alt="" /></span>


                        </div>
                    </div>
                ))}
            </div>
            {/* </Slider> */}
        </div>
    );
};

export default Academics;


