import React from 'react';

const Comment = () => {
    return (
        <div className='comment'>
            <div className='comment-details'>Author Date</div>
            <div className='comment-text'>Comment Text</div>
            <div className='user-action'>User Actions</div>
            <div className='vote'>Votes</div>
        </div>
    )
}

export default Comment;