import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
   return(
      <div className={classes.navbar}>
           <div className={classes.logo}>
               <a href="/">HOME</a>
           </div>
           <div className={classes.options}>
               <ul>
                   <Link to="/story-generator" className={classes.menu}>
                    <li>Story Image Generator</li>
                   </Link>
                   <Link to="/" className={classes.menu}>
                    <li>Painting Image Generator</li>
                   </Link>
                   <Link to="/" className={classes.menu}>
                    <li>MNist classify</li>
                   </Link>
              </ul>
           </div>
      </div>
    );

}


export default Navbar;