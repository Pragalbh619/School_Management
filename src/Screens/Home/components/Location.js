import React from 'react';
import { AppImages } from '../../../common/Images';

const Location = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-4xl text-center mt-8 mb-4">School Location</h1>
            <div className="flex flex-col justify-center items-center w-full max-w-6xl px-4">
                <div className="w-full  p-4 lg:p-8  rounded-lg mb-4 lg:mb-0">
                    <div className="mb-6 xs:line-clamp-6">
                        <p className="text-xl font-bold mb-2">Head Office</p>
                        <p className="text-base text-gray-700">12, Station Road, Lucknow, Uttar Pradesh India</p>
                        <p className="text-base text-gray-700">Phone: +91 522 5425632, 2541252</p>
                        <p className="text-base text-gray-700">Fax: +91 522 45685225</p>
                        <p className="text-base text-gray-700">Email: info@montschool.org</p>
                    </div>
                    <div className='xs:line-clamp-6'>
                        <p className="text-xl font-bold mb-2">Quality Assurance & Innovation Department</p>
                        <p className="text-base text-gray-700">10, Station Road, Lucknow, Uttar Pradesh India</p>
                        <p className="text-base text-gray-700">Phone: +91 522 5425632, 2541252</p>
                        <p className="text-base text-gray-700">Fax: +91 522 45685225</p>
                        <p className="text-base text-gray-700">Email: connect@montschool.org</p>
                    </div>
                </div>
                <div className="w-full  p-4 lg:p-8 rounded-lg overflow-hidden">
                    <iframe className="w-full h-[350px] lg:h-auto rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4657446191086!2d80.96474077543914!3d26.8887101611216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957e3bfffff91%3A0xeb0cb6e84bbc1256!2sINFRANIX%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1713937717841!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;
