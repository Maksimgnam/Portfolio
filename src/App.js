import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import About from './About/About';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';


function App() {

  const [homeOpen, setHomeOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);

  const closeHome = () => {
    setHomeOpen(true)
    setAboutOpen(false)
    setProjectsOpen(false)
    setContactsOpen(false)

  }
  const openAbout = () => {
    setAboutOpen(true)
    setHomeOpen(false)
    setProjectsOpen(false)
    setContactsOpen(false)
  }
  const openProject = () => {
    setProjectsOpen(true)
    setAboutOpen(false)
    setHomeOpen(false)
    setContactsOpen(false)
  }
  const openContacts = () => {
    setContactsOpen(true)
    setProjectsOpen(false)
    setAboutOpen(false)
    setHomeOpen(false)
  }
  return (
    <div className="App">
      <Header closeHome={closeHome} openAbout={openAbout} openProject={openProject} openContacts={openContacts} />
      {
        homeOpen && (
          <MainPage />

        )
      }
      {
        aboutOpen && (
          <About />

        )
      }
      {
        projectsOpen && (
          <Projects />

        )
      }
      {
        contactsOpen && (
          <Contacts />

        )
      }



    </div>
  );
}

export default App;
