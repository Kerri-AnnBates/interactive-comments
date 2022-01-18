import React from 'react'

const AddComment = ({ currentUser }) => {
    return (
        <div className='comment-editor'>
            <textarea defaultValue='Add a comment...'></textarea>
            <div className='avatar'><img alt='author profile picture' src={currentUser?.image.png} /></div>
            <button className='primary-btn'>Send</button>
        </div>
    )
}

export default AddComment;
