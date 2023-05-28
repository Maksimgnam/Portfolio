

import './About.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])




    return (

        <div className="About">
            <div className="AboutContainer">
                <div className="AboutContainer__one">
                    <div className="Photo" data-aos='fade-right'></div>
                    <div className="textCont">
                        <p className='Name' data-aos='fade-right'>Maksym Hnap</p>
                        <p className='Name' data-aos='fade-right'>Front-end developer</p>
                        <button className='download downloadAbout' data-aos='fade-right'>Download Cv</button>


                    </div>


                </div>
                <div className="AboutContainer__two">
                    <span className='AboutText' data-aos='fade-left'>About </span>
                    <div className="MainP" data-aos='fade-left'>
                        <p>hi everyone. Im Maks Hnap.I live in Shklo, Ukaraine. Im front-end developer. Right now Im study in Creator It Academy. i started coding about 2 years ago. Now, Im working for some projects and studing new things in web technologies.I'll be happy to do your sites. .</p>

                    </div>
                    <div className="MainSkill" data-aos='fade-left'>
                        <span className='SkillText'>About </span>

                        <div className="ulContainer">

                            <ul data-aos='fade-up' duration='1000'>
                                <li>Js</li>
                                <li>Css</li>
                                <li>Html</li>
                                <li>Scss</li>
                            </ul>
                            <ul data-aos='fade-up' duration='120'>
                                <li>Pug</li>
                                <li>Gitlub</li>
                                <li>Git</li>
                                <li>GitHub</li>
                            </ul>
                            <ul data-aos='fade-up'>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Nodemailer</li>
                                <li>AOS</li>
                            </ul>
                            <ul data-aos='fade-up'>
                                <li>Figma</li>
                                <li>Bootstrap</li>
                                <li>Tippy.js</li>
                                <li>MongoDb</li>
                            </ul>
                            <ul data-aos='fade-up'>
                                <li>Localstorage</li>
                                <li>Sessionstorage</li>
                                <li>Cookies</li>
                                <li>Indexdb</li>
                            </ul>

                        </div>


                    </div>

                </div>

            </div>
            <div className="line aboutLine"></div>

        </div>

    )


}
export default About;
