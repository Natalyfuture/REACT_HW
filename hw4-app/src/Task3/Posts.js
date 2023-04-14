import React from 'react';
import {  Post } from './Post'

export const Posts = ({posts}) => {
return(
    <ul>
        {posts.map((post) => <Post post={post} />)}
    </ul>
)
}