import React, { useState }  from 'react'
import { AppImages } from '../../../common/Images'
// import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
    // const [isOpen, setOpen] = useState(false);
    

    return (
        <>
            <div>
                <div className='bg-black h-[46px] xs:hidden sm:hidden'>
                    <div className='text-white flex justify-end  gap-3 pr-[100px]  '>
                        <div className='flex mt-2 gap-2 '>
                            <img src={AppImages.headset_mic} alt="" />
                            <p className='text-[12px] flex justify-center items-center'>+91 1234567892</p>

                            <img src={AppImages.mail} alt="" />
                            <p className='text-[12px] flex justify-center items-center'>enquiry@unitedschool.com</p>
                        </div>
                        <div className='flex mt-2 gap-2'>
                            <img className='h-[24px] w-[24px]' src={AppImages.fb} alt="" />
                            <img className='h-[24px] w-[24px]' src={AppImages.instagram} alt="" />
                            <img className='h-[24px] w-[24px]' src={AppImages.twitter} alt="" />
                        </div>
                    </div>
                </div>

                <div className='flex justify-between h-[80px] w-[88%] mx-auto'>
                    <div className='flex justify-center items-center'>
                        <div>
                            <img className='h-[64.05px] w-[64.05px]' src={AppImages.logo} alt="" />
                        </div>
                        <div className='leading-5'>
                            <h1 className='flex flex-col font-bold text-[20.94px]'>Greenwood School</h1>
                            <p className='text-[12px] text-[#666666]'>Nurturing Minds, Embracing Nature</p>
                        </div>
                    </div>

                    <div className='xs:hidden'>
                        <ul className='flex justify-end mt-7 gap-10 xl:hidden lg:hidden   '>
                            <li><a href="home">Home</a></li>
                            <div className='flex justify-center items-center gap-2'>
                                <li><a href="My School">My School</a></li>
                                <img src={AppImages.polygon} alt="" />
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <li><a href="Academics">Academics</a></li>
                                <img src={AppImages.polygon} alt="" />
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <li><a href="Events">Events</a></li>
                                <img src={AppImages.polygon} alt="" />
                            </div>


                            <li><a href="Downloads">Downloads</a></li>
                            <Link to='/ContactForm'><li><a href="Contact Us">Contact Us</a></li></Link>
                        </ul>

                      {/* <div className='hamburger-menu hidden '>
                            <a className='' href="#"><GiHamburgerMenu className=''/></a>
                      </div> */}

                    </div>
                    
                    <div className='flex justify-center items-center xs:hidden'>
                        <Link to='/ValidationForm'><button className=' h-[49px] w-[126px] rounded-2xl bg-yellow-500'>Get Enquiry</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar