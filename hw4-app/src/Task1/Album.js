import React from 'react';
import { withToggle } from './withToggle';
import  like  from './Img/like.png';
import  unlike  from './Img/unlike.png';


const Album = ({title, url, toggled, changeToggle }) => {
    
        return(
            <div>
                <hr></hr>
                <h3>{title}</h3>
                <div>
                <img src={url} alt="album cover" />
                </div>
                <button onClick= {changeToggle}>
                    {toggled ? <img className="img-like" src={like} alt="like" /> :  <img className="img-like" src={unlike} alt="unlike" />}
                </button>
            </div>  
        )  
   
}
   

export default withToggle(Album);