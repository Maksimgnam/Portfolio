

import './MainPage.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const MainPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])



    return (

        <div className='MainPage'>
            <div className="MainPageContainer">
                <div className="one">
                    <h3 data-aos='fade-right'>Hi world</h3>
                    <h4 data-aos='fade-right'>I'm Maksim Hnap</h4>
                    <div className="MainPageP" data-aos='fade-right'>


                        <p>hi everyone. Im Maks Hnap.I live in Shklo, Ukaraine. Im front-end developer. Right now Im study in Creator It Academy. i started coding about 2 years ago. Now, Im working for some projects and studing new things in web technologies.I'll be happy to do your sites. .</p>
                    </div>
                    <button className='download' data-aos='fade-right'>Download Cv</button>

                </div>
                <div className="circle" data-aos='fade-left'>
                    <span>M</span>
                </div>


            </div>
            <div className="line" ></div>
        </div>

    )


}
export default MainPage;
