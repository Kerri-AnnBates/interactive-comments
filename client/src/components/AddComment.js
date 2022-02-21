import React, { useState } from 'react';

const AddComment = ({ commentsData, setCommentsData }) => {
    const [userCommentValue, setUserCommentValue] = useState('');

    const addComment = (newComment) => {
        const comment = {
            ...newComment,
            id: commentsData.comments.length + 1,
            user: commentsData.currentUser
        }

        setCommentsData({
            ...commentsData,
            comments: [...commentsData.comments, comment]
        });
    }

    const handleCommentChange = (e) => {
        setUserCommentValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        userCommentValue.replace(/s/g, '');

        if (userCommentValue === '') {
            return;
        }


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
            <div className='avatar'><img alt='author profile picture' src={commentsData?.currentUser.image.png} /></div>
        </div >
    )
}

export default AddComment;
