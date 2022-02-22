import React from 'react';

const EditCommentModal = ({ setIsEditModalOpen }) => {

    const handleCancel = () => {
        setIsEditModalOpen(false);
    }

    return (
        <div className='modal'>
            <div className='modal-container'>
                <form>
                    <textarea name='edit' className='edit-comment'></textarea>
                    <button className='secondary-btn' onClick={handleCancel}>No, cancel</button>
                    <button className='danger-btn'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditCommentModal;
