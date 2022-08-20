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
        setIsEditModalOpen,
        setReplyToEditId,
        toggleReplyBox,
    } = props;

    const [isDelModalOpen, setIsDelOpenModal] = useState(false);
    const [commentToDeleteId, setCommentToDeleteId] = useState(null);
    const [replyToDeleteId, setReplyToDeleteId] = useState(null);
    const [commentToEditId, setCommentToEditId] = useState(null);

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
        setIsEditModalOpen(true);

        if (!parentId) {
            setCommentToEditId(id);
        } else {
            setCommentToEditId(parentId);
            setReplyToEditId(id);
        }
    }

    const handleReply = () => {
        toggleReplyBox();
    }

    return (
        <>
            <div className='user-actions'>
                {(currentUser.username === user.username) ?
                    (<>
                        <span onClick={handleEdit} ><img alt='edit icon' src={editIcon} /> Edit</span>
                        <span className='delete' onClick={() => openDeleteModal(id)}><img alt='delete icon' src={deleteIcon} /> Delete</span>
                    </>) :
                    (<span onClick={handleReply}><img alt='reply icon' src={replyIcon} /> Reply</span>)}
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
