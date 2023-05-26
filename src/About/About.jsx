

import './About.css';

const About = () => {



    return (

        <div className="About">
            <div className="AboutContainer">
                <div className="AboutContainer__one">
                    <div className="Photo"></div>
                    <div className="textCont">
                        <p className='Name'>Maksym Hnap</p>
                        <p className='Name'>Front-end developer</p>
                        <button className='download downloadAbout'>Download Cv</button>


                    </div>


                </div>
                <div className="AboutContainer__two">
                    <span className='AboutText'>About </span>
                    <div className="MainP">
                        <p>hi everyone. Im Maks Hnap.I live in Shklo, Ukaraine. Im front-end developer. Right now Im study in Creator It Academy. i started coding about 2 years ago. Now, Im working for some projects and studing new things in web technologies.I'll be happy to do your sites. .</p>

                    </div>
                    <div className="MainSkill">
                        <span className='SkillText'>About </span>

                        <div className="ulContainer">

                            <ul>
                                <li>Js</li>
                                <li>Css</li>
                                <li>Html</li>
                                <li>Scss</li>
                            </ul>
                            <ul>
                                <li>Pug</li>
                                <li>Gitlub</li>
                                <li>Git</li>
                                <li>GitHub</li>
                            </ul>
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Nodemailer</li>
                                <li>AOS</li>
                            </ul>
                            <ul>
                                <li>Figma</li>
                                <li>Bootstrap</li>
                                <li>Tippy.js</li>
                                <li>MongoDb</li>
                            </ul>
                            <ul>
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
