import React from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        //1 ая кнопка (Все) - готовая кнопка из bootstrap
        <div className="btn-group">
            <Button outline color='info'>Все</Button> 
            <button type="button" className='btn btn-outline-secondary'>Понравилось</button>
        </div>
        //<button type="button" className='btn btn-info'>Все</button>
    )
}

export default PostStatusFilter;