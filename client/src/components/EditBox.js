import React, { useEffect, useState } from 'react';
import { getCommentById, updateComment } from '../api/api';

function EditBox(props) {
    const { replyingTo, id } = props;

    const [comment, setComment] = useState(null);

    // TODO: Need to make it work for replies also.

    useEffect(() => {
        getCommentById(id).then(({ data }) => {
            setComment(data);
        }).catch(err => console.log(err));
    }, []);

    const handleOnChange = (e) => {
        setComment({ ...comment, content: e.target.value });
    }

    const handleSubmit = () => {
        updateComment(id, comment).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
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