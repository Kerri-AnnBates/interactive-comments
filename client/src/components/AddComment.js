import React, { useState } from 'react'

const AddComment = ({ currentUser }) => {
    const [commentVal, setCommentVal] = useState('');

    const handleCommentChange = (e) => {
        setCommentVal(e.target.value);
    }

    return (
        <div className='comment-editor'>
            <form>
                <textarea name="comment" value={commentVal} onChange={handleCommentChange} placeholder='Add a comment...'></textarea>
                <button className='primary-btn'>Send</button>
            </form>
            <div className='avatar'><img alt='author profile picture' src={currentUser?.image.png} /></div>
        </div >
    )
}

export default AddComment;
