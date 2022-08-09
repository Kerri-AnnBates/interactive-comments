import React, { useState, useContext } from 'react';
import CommentsContext from '../contexts/CommentsContext';
import CurrentUserContext from '../contexts/CurrentUserContext';

const AddComment = (props) => {
    const { id, user, parentId, isReply, setIsReply, setShowReplyBox } = props;

    const [userCommentValue, setUserCommentValue] = useState('');
    const [commentsData, setCommentsData] = useContext(CommentsContext);
    const [currentUser] = useContext(CurrentUserContext);

    const handleAddingComment = (newComment) => {

        if (isReply) {
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
            setCommentsData({
                ...commentsData,
                comments: [...commentsData.comments, newComment]
            });
        }
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

        let comment = {};

        if (isReply) {
            const targetId = parentId ? parentId : id;

            const targetComment = commentsData.comments.find((comm) => comm.id === targetId);

            comment = {
                content: userCommentValue,
                createdAt: "Today",
                id: targetComment.replies.length + 1,
                parentId: targetId,
                replyingTo: user.username,
                score: 0,
                user: commentsData.currentUser,
            };
        } else {
            comment = {
                createdAt: 'Today',
                content: userCommentValue,
                id: commentsData.comments.length + 1,
                user: commentsData.currentUser,
                replies: [],
                score: 0
            };
        }

        handleAddingComment(comment);
        setUserCommentValue('');
        setIsReply(false);
        setShowReplyBox(false);
    }

    return (
        <div className='comment-editor'>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" value={userCommentValue} onChange={handleCommentChange} placeholder='Add a comment...'></textarea>
                <button className='primary-btn'>Send</button>
            </form>
            <div className='avatar'><img alt='author profile picture' src={currentUser.image} /></div>
        </div >
    )
}

export default AddComment;
