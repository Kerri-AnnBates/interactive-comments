import React from 'react';

const EditCommentModal = () => {
    return (
        <div className='modal'>
            <div className='modal-container'>
                <form>
                    <textarea name='edit' className='edit-comment'></textarea>
                    <button className='primary-btn'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default EditCommentModal;
