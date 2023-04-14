import { useToggler } from './Toggler';
import { albumData } from '../Task1/Data/AlbumData';
import  like  from '../Task1/Img/like.png';
import  unlike  from '../Task1/Img/unlike.png';

export const Album1 = () => {
    const { title, url} = albumData
    const {toggled, changeToggler} = useToggler(false)
    return(
        <div>
            <h3>{title}</h3>
            <div>
            <img src={url} alt="album cover" />
            </div>
            <button onClick= {changeToggler}>
                {toggled ? <img className="img-like" src={like} alt="like" /> :  <img className="img-like" src={unlike} alt="unlike" />}
            </button>
            <hr></hr>

        </div>  
    )  

}
