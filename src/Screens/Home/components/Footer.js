import React from 'react'
import { AppImages } from '../../../common/Images'
const Footer = () => {
    return (
        <div className='bg-black  pt-[50px] '>
            <div className='flex justify-end  xxl:pr-auto  md:hidden sm:hidden xs:hidden'>
                <p className=' text-[#848484] text-[26px] pr-[7%] lg:pr-[10%]'>Subscribe Now!</p>
            </div>
            <div className='flex justify-between px-[100px] xxl:px-auto xs:flex xs:flex-col gap-y-5 md:flex md:flex-col sm:flex sm:flex-col sm:pl-10 xs:pl-10'  >
                <div className='flex gap-2  xs:w-[300px]'>
                    <div>
                        <img className='h-[64.05px] w-[64.05px] rounded-2xl' src={AppImages.logo} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='flex flex-col text-white text-[20.94px] font-bold'>Greenwood School</h1>
                        <p className='text-white text-[12px]'>Nurturing Minds, Embracing Nature</p>
                    </div>
                </div>

                <div>

                    <div className= 'lg:flex md:flex sm:flex xs:flex '>
                        <input className='h-[45px] w-[258px] rounded-l-2xl pl-5  outline-none xs:h-[35px] xs:w-[170px] ' type="text" name="Subscribe" id="Subscribe" placeholder='Enter email address' />
                        <button className='bg-[#FFB017] h-[45px] w-[114px] xs:h-[35px] xs:w-[80px] xs:px-1 rounded-r-2xl '>Subscribe</button>
                        {/* <p>hello</p> */}
                    </div>

                </div>

            </div>


            <div className='flex justify-around  pt-[50px] xs:flex xs:flex-col xs:pl-10'>
                <div className='list-none'>
                    <h1 className='font-bold text-gray-500 '>Get In Touch</h1>
                    <li className='py-1 text-white'>(522) 555-0103</li>
                    <li className='py-1 text-white'>Lucknow</li>
                    <li className='py-1 text-white'>school@example.com</li>
                </div>

                <div className='list-none xs:pt-5'>
                    <h1 className='font-bold text-yellow-500'>School Info</h1>
                    <li className='py-1 text-white'>About Us</li>
                    <li className='py-1 text-white'>Academics</li>
                    <li className='py-1 text-white'>Event</li>
                    <li className='py-1 text-white'>Blog</li>
                </div>

                <div className='list-none lg:hidden md:hidden sm:hidden xs:hidden  '>
                    <h1 className='font-bold text-yellow-500 '>Resources</h1>
                    <li className='py-1 text-white'>For current students</li>
                    <li className='py-1 text-white'>For staff</li>
                    <li className='py-1 text-white'>For Alumini</li>
                    <li className='py-1 text-white'>For visitors</li>
                </div>

                <div className='list-none xs:pt-5 '>
                    <h1 className='font-bold text-yellow-500'>Legal</h1>
                    <li className='py-1 text-white'>Term & Coditions</li>
                    <li className='py-1 text-white'>privacy and policies</li>
                    <li className='py-1 text-white'>sitemap</li>

                </div>

                <div className='list-none lg:hidden md:hidden sm:hidden xs:hidden'>
                    <h1 className='font-bold text-yellow-500 '>Links</h1>
                    <li className='py-1 text-white'>Event</li>
                    <li className='py-1 text-white'>Gallery</li>
                    <li className='py-1 text-white'>FAQ</li>
                </div>
            </div>

        </div>
    )
}

export default Footer