import classes from './StoryGen.module.css';
import { useState } from 'react';


const StoryGen = () => {
    return (
        <div className={classes['storygen-div']}>
            <div className={classes.form}>
                <form action="" method='post'>
                    <textarea type="text" placeholder="Enter the story which arises into your mind..." name='story_text'/>
                    <button type="submit" className={classes.primary}>Generate Image</button>
                </form>
                <p>Your search text : Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ducimus!</p>
                <div className={classes['generated-images']}>
                    {/* /*For loop */ }
                       <div className={classes.generatedImage}>
                         
                       </div>
                       <div className={classes.generatedImage}>
                         
                       </div>
                    <div className={classes.generatedImage}>

                    </div>
                    
                </div>
            </div>
        </div>
        
    );

}

export default StoryGen;