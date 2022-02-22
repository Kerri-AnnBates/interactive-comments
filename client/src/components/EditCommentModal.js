import React, { useContext, useEffect, useState } from 'react';
import CommentsContext from '../contexts/CommentsContext';

const EditCommentModal = ({ setIsEditModalOpen, commentToEditId }) => {

    const [commentsData, setCommentsData] = useContext(CommentsContext);
    const [input, setInput] = useState("");

    useEffect(() => {
        const commentFound = commentsData.comments.find(comment => comment.id === commentToEditId);

        if (commentFound) {
            setInput(commentFound.content);
        }
    }, []);

    const editContent = (id) => {

    }

    const handleCommentChange = (e) => {
        setInput(e.target.value);
    }

    const handleCancel = () => {
        setIsEditModalOpen(false);
    }

    const handleSubmit = () => {

    }

    return (
        <div className='modal'>
            <div className='modal-container'>
                <form>
                    <textarea name='edit' className='edit-comment' value={input} onChange={handleCommentChange}></textarea>
                    <button className='secondary-btn' onClick={handleCancel}>No, cancel</button>
                    <button className='danger-btn'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditCommentModal;
