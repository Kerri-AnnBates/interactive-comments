import React, { useEffect } from 'react';
import { deleteComment, deleteReply } from '../api/api';

const DeleteModal = (props) => {
    const {
        cancelDelete,
        commentToDeleteId,
        replyToDeleteId,
    } = props;

    const handleConfirmation = () => {
        // Check if it's a reply or comment we're deleting.
        if (commentToDeleteId) {
            console.log("Comment to delete: " + commentToDeleteId);
            deleteComment(commentToDeleteId);
        } else {
            console.log("I'm a reply: " + replyToDeleteId);
            deleteReply(replyToDeleteId);
        }

        cancelDelete();
    }

    // Prevent body scrolling when modal is open.
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => document.body.style.overflow = '';
    }, []);

    return (
        <div className='modal'>
            <div className='modal-container'>
                <h3 className='modal-header'>Delete comment</h3>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className='modal-actions'>
                    <button className='secondary-btn' onClick={cancelDelete}>No, cancel</button>
                    <button className='danger-btn' onClick={handleConfirmation}>Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;
