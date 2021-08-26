import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                id={item.id}
                label={item.label} 
                important={item.important} /> 
            </li> //вместо вышестоящих двух строк можно записать {...item}

        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;