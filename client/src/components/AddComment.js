import React, { useState, useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { addComment, addReplyToComment } from '../api/api';
import CommentsContext from '../contexts/CommentsContext';
import moment from 'moment';

const AddComment = (props) => {
    const { user, parentId, isReplying, toggleReplyBox, confirmAddition } = props;

    const [userVal, setUserVal] = useState('');
    const [currentUser] = useContext(CurrentUserContext);
    const [comments] = useContext(CommentsContext);

    const today = moment().format('yyyy-MM-DD HH:mm');

    const handleAddingComment = (content) => {

        if (!isReplying) {
            const comment = {
                createdAt: today,
                content,
                user: currentUser,
                replies: [],
                score: 0
            };

            addComment(comment).then(({ data }) => {
                confirmAddition();
            }).catch(err => console.log(err));
        } else {
            const targetComment = comments.find((comment) => comment.id === parentId);

            if (targetComment) {
                const reply = {
                    content,
                    createdAt: today,
                    replyingTo: user.username,
                    score: 0,
                    user: currentUser,
                    comment: targetComment
                };

                addReplyToComment(reply, parentId).then(({ data }) => {
                    confirmAddition();
                }).catch(err => console.log(err));
            }

            toggleReplyBox();
        }
    }

    const handleOnChange = (e) => {
        setUserVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        userVal.replace(/s/g, '');

        if (userVal === '') {
            return;
        }

        handleAddingComment(userVal);
        setUserVal('');
    }

    return (
        <div className='comment-editor'>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" value={userVal} onChange={handleOnChange} placeholder='Add a comment...'></textarea>
                <button className='primary-btn'>Send</button>
            </form>
            <div className='avatar'><img alt='author profile picture' src={currentUser.image} /></div>
        </div >
    )
}

export default AddComment;
