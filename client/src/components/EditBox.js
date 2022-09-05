import React, { useEffect, useState } from 'react';
import { getCommentById, getReplyById, updateComment, updateReply } from '../api/api';

function EditBox(props) {
    const { replyingTo, id, toggleEditMode } = props;

    const [comment, setComment] = useState(null);

    useEffect(() => {
        if (replyingTo) {
            getReplyById(id).then(({ data }) => {
                setComment(data);
            }).catch(err => console.log(err));
        } else {
            getCommentById(id).then(({ data }) => {
                setComment(data);
            }).catch(err => console.log(err));
        }

    }, []);

    const handleOnChange = (e) => {
        setComment({ ...comment, content: e.target.value });
    }

    const handleSubmit = () => {
        if (comment.content === '') {
            return;
        }

        const updates = { content: comment.content }

        if (replyingTo) {
            updateReply(id, updates).then(res => {
                console.log(res);
            }).catch(err => console.log(err));

        } else {
            updateComment(id, updates).then(res => {
                console.log(res);
            }).catch(err => console.log(err));
        }

    }

    return (
        <div className='edit-container'>
            {replyingTo && (<p>Replying to <span className='reply-username'>@{replyingTo}</span></p>)}
            <textarea value={comment?.content} onChange={handleOnChange}></textarea>
            <button className='primary-btn' onClick={handleSubmit}>Save</button>
            <button onClick={toggleEditMode} className='secondary-btn'>Cancel</button>
        </div >
    )
}

export default EditBox;