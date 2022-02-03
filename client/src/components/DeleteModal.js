import React, { useEffect } from 'react';

const DeleteModal = (props) => {
    const { setIsOpenModal, setCommentToDeleteId, setReplyToDeleteId, deleteComment } = props;

    const handleCancel = () => {
        setIsOpenModal(false);
        setCommentToDeleteId(null);
        setReplyToDeleteId(null);
    }

    const handleDelete = () => {
        deleteComment();
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
                    <button className='secondary-btn' onClick={handleCancel}>No, cancel</button>
                    <button className='danger-btn' onClick={handleDelete}>Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;
