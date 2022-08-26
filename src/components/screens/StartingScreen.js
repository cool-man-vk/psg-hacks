import classes from './StartingScreen.module.css';

const StartingScreen = () => {
    return (
        <div className={classes.screen}>
            <div className={classes['inner-container']}>
                <h3>Creativity is seeing what others see and thinking what no one else ever thought.</h3>
                <a href="#get-started"><button>Get Started</button></a>
            </div>
        </div>
        
    );
}

export default StartingScreen;