import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section3 = ({ info }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display 3 items per slide
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 535,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
        
    };

    return (
       <div className='w-[83%] mx-auto '>
            <Slider {...settings}>
                {info.map((item, index) => (
                    <div key={index} className='max-w-[98%]' >
                        <div className='bg-gray-200 flex justify-around items-center gap-2  rounded-lg px-[10px] py-[15px]  lg:h-[90px] ' >
                            <div><img src={item?.img} alt="" /></div>
                            <div>
                                <div className='font-bold'>{item?.name}</div>
                                <div>{item?.text}</div>
                            </div>
                            <div className='bg-[#FFB017] rounded-full h-6 w-6 pl-1 pt-1'><img src={item?.img1} alt="" /></div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default Section3;

