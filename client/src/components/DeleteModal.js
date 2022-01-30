import React from 'react';

const DeleteModal = (props) => {
    const { setIsOpenModal, setCommentToDeleteId, deleteComment } = props;

    const handleCancel = () => {
        setIsOpenModal(false);
        setCommentToDeleteId(null);
    }

    const handleDelete = () => {
        deleteComment();
    }

    return (
        <div className='modal'>
            <div className='modal-container'>
                <h3 className='modal-header'>Delete comment</h3>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className='modal-actions'>
                    <button onClick={handleCancel}>No, cancel</button>
                    <button onClick={handleDelete}>Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;
