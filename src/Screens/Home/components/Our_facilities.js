// import React from 'react'
// const Our_facilities = ({ ofdata }) => {
//     const mycolor = ['#DFFDF5', '#DFF7FF', '#EBF1FF', '#FFF7E0']
//     return (
//         <>
//             <h1 className='font-extrabold text-[44px] flex justify-center items-center mt-[80px] py-10 xxl:mt-[30px] lg:mt-[20px]'>Our Facilities</h1>
//             <div className='grid grid-cols-2 gap-10 w-[83%] mx-auto '>
//                 {ofdata.map((b1, index) => {    
//                     return (
//                         <>
//                             <div style={{ backgroundColor: mycolor[index] }} className='h-[354.95px]  relative rounded-3xl xl:h-[300px]  lg:h-[250px]  lg:p-2'>
//                                 <div><img className='pl-[10px] lg:h-[70px]' src={b1?.icon} alt="" /></div>
//                                 <div className='font-bold text-xl pl-[20px]'>{b1?.heading}</div>
//                                 <div className='h-[100px] w-[50%] pl-[20px] text-[#686868] text-[16px] xl:w-[60%] lg:text-[14px] '>{b1?.description}</div>
//                                 <div className='max-h-[250px] max-w-[250px] absolute right-[5%] bottom-[2%] '><img className=' h-full w-full object-contain ' src={b1?.img} alt="" /></div>

//                             </div>
//                         </>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }
// export default Our_facilities


import React from 'react';
import Slider from 'react-slick';

const OurFacilities = ({ ofdata }) => {
    const mycolor = ['#DFFDF5', '#DFF7FF', '#EBF1FF', '#FFF7E0'];

    // Settings for the Slick carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default to 2 slides
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <h1 className='font-extrabold text-[44px] flex justify-center items-center  py-10 '>Our Facilities</h1>
            <Slider {...settings} className="w-[83%] mx-auto ">
                {ofdata.map((b1, index) => (
                    <div key={index} className="px-4"> {/* Added a container div */}
                        <div className={`h-[354.95px]  relative rounded-3xl lg:p-2 `} style={{ backgroundColor: mycolor[index % mycolor.length] }}>
                            <div><img className='pl-[10px]' src={b1?.icon} alt="" /></div>
                            <div className='font-bold text-xl pl-[20px]'>{b1?.heading}</div>
                            <div className='w-[50%] pl-[20px] text-[#686868] text-[12px] lg:line-clamp-6 xs:line-clamp-6 '>{b1?.description}</div> 
                            <div className='max-h-[150px] max-w-[150px] absolute right-[5%] bottom-[15%] '><img className=' h-full w-full object-contain ' src={b1?.img} alt="" /></div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default OurFacilities;



