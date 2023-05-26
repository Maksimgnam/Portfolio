
import './Header.css';

const Header = ({ closeHome, openAbout, openProject, openContacts }) => {

    return (
        <div className='Header'>
            <div className="logo">
                Coder
            </div>
            <div className="nav">
                <button className='link' onClick={closeHome}>Home</button>
                <button className='link' onClick={openAbout}>About</button>

                <button className='link' onClick={openProject}>Projects</button>
                <button className='link' onClick={openContacts}>Contact</button>
            </div>
        </div>
    )
}
export default Header;
