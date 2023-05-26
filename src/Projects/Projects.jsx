
import './Projects.css';
import { useState } from 'react';


const Projects = () => {
    const [filter, setFilter] = useState('');
    const Cards = [
        { id: 1, name: 'Rick and Morty', stack: 'React', about: 'Rick and Morty  is a  test project from  PeCode🚀🚀🚀🚀😎😎🤘🤘', githubLink: 'https://github.com/Maksimgnam/Rick-and-Morty-react.git', link: 'inquisitive-fairy-07394f.netlify.app' },
        { id: 2, name: 'Timer', stack: 'React', about: 'Secundomir in react js 🚀🚀🤘', githubLink: 'https://github.com/Maksimgnam/Timer.git', link: 'inquisitive-fairy-07394f.netlify.app' },
        { id: 3, name: 'StopClock', stack: 'React', about: 'Stop clock in react js🚀🚀😎🤘', githubLink: 'https://github.com/Maksimgnam/ClockStoper.git', link: 'deluxe-sunburst-59adb5.netlify.app' },
        { id: 4, name: 'Payment', stack: 'React', about: 'Payment in react 😎😎😎😎🤘🚀🚀', githubLink: 'https://github.com/Maksimgnam/Payment.git', link: 'payment-red.vercel.app' },
        { id: 4, name: 'FollowCard', stack: 'React', about: 'First React project with Redux😎😎😎🚀🚀🚀🚀🤘🤘', githubLink: 'https://github.com/Maksimgnam/FollowCard.git', link: 'follow-card.vercel.app/' },
    ]
    const filterCard = Cards.filter(filt =>
        filt.name.toLowerCase().includes(filter.toLowerCase())

    )
    return (


        <div className='Projects'>
            <p className='Card__text'>Projects</p>
            <input type="text" value={filter} onChange={event => setFilter(event.target.value)} />
            <div className="CardsContainer">
                {
                    filterCard.map(project =>
                        <div className='Card' key={project.id}>
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
