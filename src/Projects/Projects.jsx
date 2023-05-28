
import './Projects.css';
import { useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Projects = () => {

    const [filter, setFilter] = useState('');
    const Cards = [
        { id: 1, name: 'Rick and Morty', stack: 'React', about: 'Rick and Morty  is a  test project from  PeCode🚀🚀🚀🚀😎😎🤘🤘', githubLink: 'https://github.com/Maksimgnam/Rick-and-Morty-react.git', link: 'https://rick-and-morty-react-rose.vercel.app/' },
        { id: 2, name: 'Timer', stack: 'React', about: 'Secundomir in react js 🚀🚀🤘', githubLink: 'https://github.com/Maksimgnam/Timer.git', link: 'https://inquisitive-fairy-07394f.netlify.app/' },
        { id: 3, name: 'StopClock', stack: 'React', about: 'Stop clock in react js🚀🚀😎🤘', githubLink: 'https://github.com/Maksimgnam/ClockStoper.git', link: 'https://deluxe-sunburst-59adb5.netlify.app/' },
        { id: 4, name: 'FollowCard', stack: 'React', about: 'First React project with Redux😎😎😎🚀🚀🚀🚀🤘🤘', githubLink: 'https://github.com/Maksimgnam/FollowCard.git', link: 'https://follow-card.vercel.app/' },
        { id: 5, name: 'Payment', stack: 'React', about: 'Payment in react 😎😎😎😎🤘🚀🚀', githubLink: 'https://github.com/Maksimgnam/Payment.git', link: 'https://payment-red.vercel.app/' },
    ]
    const filterCard = Cards.filter(filt =>
        filt.name.toLowerCase().includes(filter.toLowerCase())

    )
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])
    return (


        <div className='Projects'>
            <p className='Card__text' data-aos='fade-up'>Projects</p>
            <input type="text" placeholder='Search project' value={filter} onChange={event => setFilter(event.target.value)} data-aos='fade-up' />
            <div className="CardsContainer" data-aos='fade-up'>
                {
                    filterCard.map(project =>
                        <div className='Card' key={project.id}  >
                            <p className='CardName'>{project.name}</p>
                            <div className="CardTextCont">
                                <a href={project.githubLink}>Github</a>
                                <p className='stack'> <span className='Span'> Stack: </span> {project.stack}</p>
                                <p className='about'> <span className='Span'>About: </span>{project.about}</p>

                                <a href={project.link}>
                                    <button className='view'>view</button>
                                </a>






                            </div>

                        </div>


                    )
                }
            </div>
        </div>
    )
}
export default Projects;
