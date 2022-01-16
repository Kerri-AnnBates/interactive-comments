import React from 'react';
import replyIcon from '../images/icon-reply.svg';
import deleteIcon from '../images/icon-delete.svg';
import editIcon from '../images/icon-edit.svg';


const UserActions = () => {
    return (
        <div className='user-actions'>
            <span><img alt='reply icon' src={replyIcon} /> Reply</span>
            {/* <span className='delete'><img alt='reply icon' src={deleteIcon} /> Delete</span>
            <span><img alt='reply icon' src={editIcon} /> Edit</span> */}
        </div>
    )
}

export default UserActions;
