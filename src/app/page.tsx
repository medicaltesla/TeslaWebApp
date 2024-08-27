"use client"
import React, {lazy, useState, useEffect} from 'react';
import dynamic from 'next/dynamic';
import Heading from '@/utils/Heading';
import Image from 'next/image';
import Loader from '@/components/Loader/Loader';
const HomeBanner = lazy(() => import('../components/Home/HomeBanner'))
const HomeCard = lazy(() => import('../components/Home/HomeCard'));
const WelcomeText = lazy(() => import('../components/Home/WelcomeText'));
const WhyChooseTesla = lazy(() => import('@/components/Home/WhyChooseTesla'));
const FAQ_Prop = lazy(() => import('../components/FAQ/FAQ_Prop'));
const FAQ_Heading = lazy(() => import('../components/FAQ/FAQ_Heading'));
const TestimonialCards = lazy(() => import('../components/Home/TestimonialCards'));
const AppointmentForm = lazy(() => import('../components/Contact/AppointmentForm'));
import styles from "../components/Home/WelcomeText.module.css"

const card = {
    width: '100%', 
}
    
const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        // Simulate a loading period (e.g., fetching data)
        const timer = setTimeout(() => {
          setIsLoading(false); // Stop loading after 2 seconds
        });
        return () => clearTimeout(timer); // Cleanup the timer
      }, []);
    
    // const myComponentRef = useRef<HTMLDivElement>(null);

    // const handleButtonClick = () => {
    //     if (myComponentRef.current) {
    //         const yOffset = -80; // Adjust the offset based on your layout
    //         const rect = myComponentRef.current.getBoundingClientRect();
    //         const y = rect.top + window.pageYOffset + yOffset;
    //         window.scrollTo({ top: y, behavior: 'smooth' });
    //         console.log("Register")
    //     }
    //   };
    
    // const handleWelcomeButtonClick = () => {
    //     handleButtonClick()
    // };

    return(
        <div>
            {isLoading ? (
                <Loader /> // Display the loader while loading
            ) : (
                <>
                    <Heading
                        title="Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center"
                        description="Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center"
                        keywords="Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center"
                    />

                    <HomeBanner
                        title="Radiology Clinic | Your Local Imaging Specialist Comprehensive and Timely Reports"
                        FormComponent={<AppointmentForm/>}
                    />

                    <div className="flex flex-wrap justify-center px-4 ">
                        <div className={styles.welcomeButton}>
                            <button type="button" className="focus:outline-none text-secondary-500 border-2 border-secondary-500 hover:border-secondary-500 focus:ring-4 focus:ring-secondary-500 font-bold rounded-lg text-lg md:text-xl w-18 h-14 px-5 py-2.5 me-2 mb-2  bg-white hover:bg-secondary-500 hover:text-white ">Assured Safety</button>
                        </div>
                        <div className={styles.welcomeButton}>
                            <button type="button" className="focus:outline-none text-secondary-500 border-2 border-secondary-500 hover:border-secondary-500 focus:ring-4 focus:ring-secondary-500 font-bold rounded-lg text-lg md:text-xl w-18 h-14 px-5 py-2.5 me-2 mb-2  bg-white hover:bg-secondary-500 hover:text-white ">Trusted & Accredited Labs</button>
                        </div>
                        <div className={styles.welcomeButton}>
                            <button type="button" className="focus:outline-none text-secondary-500 border-2 border-secondary-500 hover:border-secondary-500 focus:ring-4 focus:ring-secondary-500 font-bold rounded-lg text-lg md:text-xl w-18 h-14 px-5 py-2.5 me-2 mb-2  bg-white hover:bg-secondary-500 hover:text-white ">Fast & Accurate Reports</button>
                        </div>
                        <div className={styles.welcomeButton}>
                            <button type="button" className="focus:outline-none text-secondary-500 border-2 border-secondary-500 hover:border-secondary-500 focus:ring-4 focus:ring-secondary-500 font-bold rounded-lg text-lg md:text-xl w-18 h-14 px-5 py-2.5 me-2 mb-2  bg-white hover:bg-secondary-500 hover:text-white ">Affordable</button>
                        </div>
                    
                    </div>


                    <WelcomeText />
                   
                    <HomeCard/>
                    <div className="md:my-2 lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 w-full justify-items-center items-center">
                        <Image style={card} src='/Image/Home/process.png' width={600} height={400} alt="process"/>
                    </div>

                    <WhyChooseTesla/>
                    <TestimonialCards/>
                    <FAQ_Heading heading="F.A.Q." para="Although we have shared all the information with you on our website, if there are any queries that are unaddressed, you can find the answers to them below in our FAQs"/>
                    <FAQ_Prop question="What services does Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre offer?" answer='Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre offers a comprehensive range of diagnostic services including 3T MRI, 32-slice CT scans, CT guided interventional procedures, pathology lab services (blood tests), USG & color doppler, X-ray & X-ray procedures, ECG, stress tests, and 2D echo.'/>
                    <FAQ_Prop question="Do I need a referral from my doctor to get a diagnostic test?" answer='Yes, a referral from a licensed healthcare provider is typically required for most diagnostic imaging tests. This ensures that the appropriate test is performed and that the results are sent to the correct healthcare provider for further evaluation and treatment.'/>
                    <FAQ_Prop question="How long does it take to get my test results? " answer='The time it takes to get your test results can vary depending on the type of test and the urgency of the results. Typically, results for most imaging tests are available within 24-48 hours. Our radiologists will interpret the images and provide a detailed report to your referring physician.'/>
                    <FAQ_Prop question="How do I schedule an appointment? " answer='You can schedule an appointment by calling our clinic directly or by using our online appointment booking system available on Contact Us page. Our staff will assist you in finding a convenient time for your visit and provide any necessary instructions for your appointment.'/>
                    <FAQ_Prop question="Will my insurance cover the cost of the diagnostic tests? " answer='Coverage for diagnostic tests varies depending on your insurance plan. We recommend contacting your insurance provider to verify coverage and obtain any necessary pre-authorization before your appointment. Our billing department can also assist you with insurance questions and provide an estimate of out-of-pocket costs.'/>
                </>
            )}
        </div>
    )
}


export default Home;