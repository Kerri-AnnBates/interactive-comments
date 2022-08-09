import React, { useState, useContext } from 'react';
import CommentsContext from '../contexts/CommentsContext';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { addComment } from '../api/api';

const AddComment = (props) => {
    const { id, user, parentId, isReplying, toggleReplyBox } = props;

    const [userVal, setUserVal] = useState('');
    const [commentsData, setCommentsData] = useContext(CommentsContext);
    const [currentUser] = useContext(CurrentUserContext);

    console.log("Replying...", isReplying);

    const handleAddingComment = (newComment) => {

        if (isReplying) {
            const targetId = parentId ? parentId : id;

            const parentComment = commentsData.comments.find((comm) => comm.id === targetId);
            const newReplies = [...parentComment.replies, newComment];

            // replace replies
            parentComment.replies = newReplies;

            // replace parent comment in comments list
            const newComments = commentsData.comments.map(currComm => {
                if (currComm.id === parentId) {
                    Object.assign(currComm, parentComment);
                }

                return currComm;
            });

            setCommentsData({
                ...commentsData,
                comments: newComments
            });

        } else {
            addComment(newComment).then(data => console.log(data)).catch(err => console.log(err));
        }
    }

    const handleCommentChange = (e) => {
        setUserVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        userVal.replace(/s/g, '');

        if (userVal === '') {
            return;
        }

        let comment = {};

        if (isReplying) {
            const targetId = parentId ? parentId : id;

            const targetComment = commentsData.comments.find((comm) => comm.id === targetId);

            comment = {
                content: userVal,
                createdAt: "2022-06-27",
                replyingTo: user.username,
                score: 0,
                user: currentUser
            };
        } else {
            comment = {
                createdAt: '2022-06-27',
                content: userVal,
                user: currentUser,
                replies: [],
                score: 0
            };
        }

        handleAddingComment(comment);
        setUserVal('');
        toggleReplyBox();
    }

    return (
        <div className='comment-editor'>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" value={userVal} onChange={handleCommentChange} placeholder='Add a comment...'></textarea>
                <button className='primary-btn'>Send</button>
            </form>
            <div className='avatar'><img alt='author profile picture' src={currentUser.image} /></div>
        </div >
    )
}

export default AddComment;
