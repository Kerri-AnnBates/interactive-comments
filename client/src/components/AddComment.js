import React, { useEffect, useState } from 'react'

const AddComment = ({ currentUser, addComment }) => {
    const [userCommentValue, setUserCommentValue] = useState('');

    const handleCommentChange = (e) => {
        setUserCommentValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            createdAt: 'Today',
            content: userCommentValue,
            replies: [],
            score: 0
        }

        addComment(newComment);
        setUserCommentValue('');
    }

    return (
        <div className='comment-editor'>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" value={userCommentValue} onChange={handleCommentChange} placeholder='Add a comment...'></textarea>
                <button className='primary-btn'>Send</button>
            </form>
            <div className='avatar'><img alt='author profile picture' src={currentUser?.image.png} /></div>
        </div >
    )
}

export default AddComment;
