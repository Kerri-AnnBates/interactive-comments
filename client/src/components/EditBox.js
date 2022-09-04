import React, { useEffect, useState } from 'react';
import { getCommentById, getReplyById, updateComment, updateReply } from '../api/api';

function EditBox(props) {
    const { replyingTo, id } = props;

    const [comment, setComment] = useState(null);

    // TODO: Need to make it work for replies also.

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
        if (replyingTo) {
            updateReply(id, comment).then(res => {
                console.log(res);
            }).catch(err => console.log(err));

        } else {
            updateComment(id, comment).then(res => {
                console.log(res);
            }).catch(err => console.log(err));
        }

    }

    return (
        <div className='edit-container'>
            {replyingTo && (<p>Replying to <span className='reply-username'>@{replyingTo}</span></p>)}
            <textarea value={comment?.content} onChange={handleOnChange}></textarea>
            <button className='primary-btn' onClick={handleSubmit}>Save</button>
        </div>
    )
}

export default EditBox;