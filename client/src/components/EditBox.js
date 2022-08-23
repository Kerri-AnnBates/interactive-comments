import React from 'react';

function EditBox(props) {
    const { content } = props;

    return (
        <div className='edit-container'>
            <textarea value={content}></textarea>
            <button className='primary-btn'>Save</button>
        </div>
    )
}

export default EditBox;