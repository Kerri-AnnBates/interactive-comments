import React, { useEffect } from 'react';
import { deleteComment, deleteReply } from '../api/api';

const DeleteModal = (props) => {
    const {
        cancelDelete,
        commentToDeleteId,
        replyToDeleteId,
        confirmDeletion,
    } = props;

    const handleConfirmation = () => {

        if (commentToDeleteId) {

            deleteComment(commentToDeleteId).then(res => {
                if (res.status == 204) {
                    confirmDeletion();
                }
            }).catch(err => console.log(err));

        } else {

            deleteReply(replyToDeleteId).then(res => {
                if (res.status) {
                    confirmDeletion();
                }
            }).catch(err => console.log(err));
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
