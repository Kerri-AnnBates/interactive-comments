import React from 'react';

const DeleteModal = () => {
    return (
        <div className='modal'>
            <div className='modal-container'>
                <h3 className='modal-header'>Delete comment</h3>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className='modal-actions'>
                    <button>No, cancel</button>
                    <button>Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;
