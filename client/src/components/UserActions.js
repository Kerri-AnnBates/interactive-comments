import React from 'react';
import replyIcon from '../images/icon-reply.svg';
import deleteIcon from '../images/icon-delete.svg';
import editIcon from '../images/icon-edit.svg';


const UserActions = ({ currentUser, user, deleteComment, id }) => {

    const handleDelete = (commentId) => {
        deleteComment(commentId);
    }

    return (
        <div className='user-actions'>
            {(currentUser.username === user.username) ?
                (<>
                    <span><img alt='edit icon' src={editIcon} /> Edit</span>
                    <span className='delete' onClick={() => handleDelete(id)}><img alt='delete icon' src={deleteIcon} /> Delete</span>
                </>) :
                (<span><img alt='reply icon' src={replyIcon} /> Reply</span>)}
        </div>
    )
}

export default UserActions;
