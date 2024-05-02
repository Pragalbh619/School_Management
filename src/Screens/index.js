import React from 'react'
import Navbar from './Home/components/Navbar'
import Announcements from './Home/components/Announcements'
import Welcome from './Home/components/Welcome'
import Section3 from './Home/components/Section3'
import Academics from './Home/components/Academics'
import { AppImages } from '../common/Images'
import Latest_news from './Home/components/Latest_news'
import Gallery from './Home/components/Gallery'
import Our_facilities from './Home/components/Our_facilities'
import Upcoming_events from './Home/components/Upcoming_events'
import School_staff from './Home/components/School_staff'
import Story from './Home/components/Story'
import Birthday from './Home/components/Birthday'
import Download from './Home/components/Download'
import Post from './Home/components/Post'
import Location from './Home/components/Location'
import Footer from './Home/components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () => {

    return (
        <>
            <Navbar />
            <Announcements />
            <Welcome />
            <Section3 info={[{ img: AppImages.p1, name: "Rajiv Fox", text: "Principal Message", img1: AppImages.arrow_outward },
            { img: AppImages.p2, name: "Sharad Kumar", text: "Chairman's Message", img1: AppImages.arrow_outward },
            { img: AppImages.p3, name: "Anjali Howard", text: "Chairperson's Message", img1: AppImages.arrow_outward }]} />

            <Academics data={[{ main_img: AppImages.a1, title: "Lower School (K-IV)", more1: "Information", m_img: AppImages.arrow_outward, more2: "Curriculum", m_img2: AppImages.arrow_outward },
            { main_img: AppImages.a2, title: "Middle School (V-VIII)", more1: "Information", m_img: AppImages.arrow_outward, more2: "Curriculum", m_img2: AppImages.arrow_outward },
            { main_img: AppImages.a3, title: "Upper School  (VIII-XII)", more1: "Information", m_img: AppImages.arrow_outward, more2: "Curriculum", m_img2: AppImages.arrow_outward }]} />

            <Latest_news d1={[{ img: AppImages.ln2, date: "January 10, 2024", heading: "Scholastic Awards Honor", description: "On the river, on East 83rd Street, we will be here. Educating girls who are undaunted in their…" },
                { img: AppImages.ln3, date: "January 10, 2024", heading: "Scholastic Awards Honor", description: "We can pioneer a curriculum in which academic challenge and happiness thrive side by side. Et harum quidem…" },
                { img: AppImages.ln4, date: "January 10, 2024", heading: "Scholastic Awards Honor", description: "n the river, on East 83rd Street, we will be here. Educating girls who are undaunted in their…" }]} />

            <Gallery gdata={[{ img: AppImages.g2, text: "Classes(6)" }, { img: AppImages.g3, text: "Campus(16)" }, { img: AppImages.g4, text: "Students(20)" }, { img: AppImages.g5, text: "Activity(12)" }]} />

            <Our_facilities ofdata={[{ icon: AppImages.of1, heading: "Modern Classrooms", description: "Equipped with cutting-edge technology, our classrooms offer an engaging atmosphere for optimal learning, fostering academic excellence and student success.", img: AppImages.of11 },

            { icon: AppImages.of2, heading: "Science and Innovation Labs", description: "Inspiring curiosity, our labs provide hands-on experiences with state-of-the-art equipment, cultivating creativity and a passion for scientific exploration.", img: AppImages.of22 },

            {  icon: AppImages.of3, heading: "Library and Resource Center", description: "Our extensive library is a quiet haven, offering diverse books and digital resources, supporting academic growth and intellectual development in a serene environment.", img: AppImages.of33 },

            {  icon: AppImages.of4, heading: "Sports and Recreation", description: "Promoting an active lifestyle, our well-equipped facilities encourage physical activity, teamwork, and overall well-being, ensuring a balanced and healthy student experience.", img: AppImages.of44 }]} 
            
            />


            <Upcoming_events />    
            <School_staff details={[{img:AppImages.p11,name:'Ms. Sarah Turner',jr:'English Literature Instructor',des:'A passionate educator inspiring a love for literature. Engages students with dynamic teaching methods, fostering critical thinking and creativity.'},{img:AppImages.p22,name:'Dr. Michael Chen',jr:'Science Department Head',des:'Leading the charge in scientific exploration. Dr. Chen is dedicated to shaping curious minds and promoting hands-on learning experiences.'},{img:AppImages.p32,name:'Mr. Robert Davis',jr:'Physical Education Coach',des:'A fitness enthusiast instilling a passion for health. Mr. Davis cultivates teamwork and discipline through engaging sports and fitness activities.'},]}/>
            
            <Story/>
            <Birthday/>
            <Download/>
            <Post/>
            <Location/>
            <Footer/>

            
        </>
    )
}

export default Home