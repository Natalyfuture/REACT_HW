import React from 'react';

export const Post = ({post}) => {
    const {title = post.title, completed = post.completed} = post
    return(
        <li>
            <div>{`Title: ${title} - completed: ${completed}`}</div>
        </li>
    )
}

