import classes from './Cards.module.css';
import { RiChatHistoryFill } from 'react-icons/ri';
import { FaPaintBrush } from 'react-icons/fa';
import { DiGitBranch } from 'react-icons/di';
import { Link } from 'react-router-dom';


const Cards = () => {

    const cardDetails = [
        { title: 'Story Generator', icon: <RiChatHistoryFill className={classes.icon} style={{'color':'orange'}} /> , link:'/story-generator'},
        { title: 'Paint to Image', icon: <FaPaintBrush className={classes.icon} style={{'color':'brown'}} /> , link:'/paint-to-image'},
        { title: 'MNist classfication', icon: <DiGitBranch className={classes.icon} style={{ 'color': 'blueviolet' }} /> , link:'/mnist'}
    ];
    return (
        <div className={classes.card} id="get-started">
            {cardDetails.map((item) => {
                return (<div className={classes.inner}>
                <h3>{item.title}</h3>
                    <p>{item.icon}</p>
                    <p style={{'textAlign':'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, iste.</p>
                    <Link to={item.link}>
                        <button className={classes.primary}>Go to Link</button>
                    </Link>
              </div>)
            })}
        </div>    
    );

}

export default Cards;