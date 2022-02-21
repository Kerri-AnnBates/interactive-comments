import React, { useContext, useState } from 'react'
import CommentsContext from '../contexts/CommentsContext';

const AddComment = ({ currentUser }) => {
    const [userCommentValue, setUserCommentValue] = useState('');
    const [commentsData, setCommentsData] = useContext(CommentsContext);

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

        if (userCommentValue == '') {
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
            <div className='avatar'><img alt='author profile picture' src={currentUser?.image.png} /></div>
        </div >
    )
}

export default AddComment;
