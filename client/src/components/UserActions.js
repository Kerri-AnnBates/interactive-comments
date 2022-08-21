import React, { useState } from 'react';
import replyIcon from '../images/icon-reply.svg';
import deleteIcon from '../images/icon-delete.svg';
import editIcon from '../images/icon-edit.svg';
import DeleteModal from './DeleteModal';


const UserActions = (props) => {
    const { currentUser,
        user,
        replyingTo,
        id,
        confirmDeletion,
        parentId,
        toggleEditMode,
        toggleReplyBox,
    } = props;

    const [isDelModalOpen, setIsDelOpenModal] = useState(false);
    const [commentToDeleteId, setCommentToDeleteId] = useState(null);
    const [replyToDeleteId, setReplyToDeleteId] = useState(null);

    const cancelDelete = () => {
        setIsDelOpenModal(false);
        setCommentToDeleteId(null);
        setReplyToDeleteId(null);
    }

    const openDeleteModal = (id) => {
        setIsDelOpenModal(true);

        if (replyingTo) {
            setReplyToDeleteId(id);
        } else {
            setCommentToDeleteId(id);
        }
    }

    const handleEdit = () => {
        toggleEditMode();
    }

    return (
        <>
            <div className='user-actions'>
                {(currentUser.username === user.username) ?
                    (<>
                        <span onClick={handleEdit} ><img alt='edit icon' src={editIcon} /> Edit</span>
                        <span className='delete' onClick={() => openDeleteModal(id)}><img alt='delete icon' src={deleteIcon} /> Delete</span>
                    </>) :
                    (<span onClick={toggleReplyBox}><img alt='reply icon' src={replyIcon} /> Reply</span>)}
            </div>

            {isDelModalOpen && (<DeleteModal
                cancelDelete={cancelDelete}
                commentToDeleteId={commentToDeleteId}
                replyToDeleteId={replyToDeleteId}
                confirmDeletion={confirmDeletion}
            />)}
        </>
    )
}

export default UserActions;
