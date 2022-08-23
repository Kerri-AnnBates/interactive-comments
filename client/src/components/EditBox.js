import React, { useState } from 'react';

function EditBox(props) {
    const { replyingTo, content } = props;

    const [val, setVal] = useState(content);

    const handleOnChange = (e) => {
        setVal(e.target.value);
    }

    return (
        <div className='edit-container'>
            {replyingTo && (<p>Replying to <span className='reply-username'>@{replyingTo}</span></p>)}
            <textarea value={val} onChange={handleOnChange}></textarea>
            <button className='primary-btn'>Save</button>
        </div>
    )
}

export default EditBox;