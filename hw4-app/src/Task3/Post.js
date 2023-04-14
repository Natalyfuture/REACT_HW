import React from 'react';
import '../App.css'

export const Post = ({post}) => {
    const {title = post.title, completed = post.completed} = post
    return(
        <li className='post-li'>
            <h4>{`Title: ${title} - completed: ${completed}`}</h4>
        </li>
    )
}

