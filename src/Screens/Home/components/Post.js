// import React from 'react'
// import { AppImages } from '../../../common/Images'

// // import useMediaQuery from '@mui/material/useMediaQuery';


// const Post = () => {
   

//     return (

//         <div className='my-[100px] w-[83%] gap-5 mx-auto  flex'>
     
//                 <div></div>
//             <div className='flex flex-col gap-2 '>
//                 <div className='flex justify-start items-center '>
//                     <img className='h-[24px] w-[35px]' src={AppImages.youtube_icon} alt="" />
//                     <p className='text-[22px] font-bold '>YouTube</p>
//                 </div>
//                 <div className='bg-black h-[500px] w-[365px] border rounded-2xl relative '>

//                     <div>
//                         <img className='absolute top-[45%] left-[45%] xxl:left-[40%]' src={AppImages.youtube_icon} alt="" />
//                         <img className='absolute top-[6%] left-[2%]' src={AppImages.s13logo} alt="" />
//                     </div>

//                 </div>
//             </div>


//             <div className='flex flex-col gap-2'>
//                 <div className='flex  gap-2'>
//                     <img  className='h-[32px] w-[32px]' src={AppImages.f} alt="" />
//                     <p className='text-[14px] flex justify-center items-center'>Facebook</p>
//                 </div>
//                 <div className=' h-[500px] w-[365px] border rounded-2xl '>
//                     <div>
//                         <img className=' h-[500px] w-[365px] ' src={AppImages.s132} alt="" />
                       
//                     </div>
//                 </div>
//             </div>


//             <div className='flex flex-col gap-2'>
//                 <div className='flex  gap-2'>
//                     <img  className='h-[33px] w-[33px]' src={AppImages.x} alt="" />
//                     <p className='text-[14px] flex justify-center items-center'>Twitter</p>
//                 </div>
//                 <div className=' h-[500px] w-[365px] relative '>
//                     <img className='border rounded-2xl  h-[500px] w-[365px]' src={AppImages.s131} alt="" />
//                     <img className='absolute top-[27.5%] left-[4%] h-[18%] w-[22%]' src={AppImages.s13logo} alt="" />
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default Post

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AppImages } from '../../../common/Images';

const Post = () => {
    // Settings for the Slick carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1115,
                settings: {
                    slidesToShow: 2,
                }
            },
        
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="my-[100px] w-[86%] mx-auto">
            <Slider {...settings}>
                {/* First Slide */}
                <div className="p-4">
                    <div className="flex flex-col items-center">
                        <div className="flex justify-start items-center mb-4">
                            <img className="h-6 w-8" src={AppImages.youtube_icon} alt="" />
                            <p className="text-lg font-bold ml-2">YouTube</p>
                        </div>
                        <div className="bg-black h-96 w-80 border rounded-2xl relative">
                            <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={AppImages.youtube_icon} alt="" />
                            <img className="absolute top-4 left-4" src={AppImages.s13logo} alt="" />
                        </div>
                    </div>
                </div>
                {/* Second Slide */}
                <div className="p-4">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center mb-4">
                            <img className="h-8 w-8" src={AppImages.f} alt="" />
                            <p className="text-lg font-bold ml-2">Facebook</p>
                        </div>
                        <div className="h-96 w-80 border rounded-2xl">
                            <img className="h-full w-full" src={AppImages.s132} alt="" />
                        </div>
                    </div>
                </div>
                {/* Third Slide */}
                <div className="p-4">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center mb-4">
                            <img className="h-8 w-8" src={AppImages.x} alt="" />
                            <p className="text-lg font-bold ml-2">Twitter</p>
                        </div>
                        <div className="h-96 w-80 relative">
                            <img className="border rounded-2xl h-full w-full" src={AppImages.s131} alt="" />
                            <img className="absolute top-[35%] left-[15%] h-[18%] w-[22%]" src={AppImages.s13logo} alt="" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Post;



