import React, { useContext, useEffect } from 'react';
import CommentsContext from '../contexts/CommentsContext';

const DeleteModal = (props) => {
    const { setIsOpenModal, setCommentToDeleteId, setReplyToDeleteId, commentToDeleteId, replyToDeleteId } = props;
    const [commentsData, setCommentsData] = useContext(CommentsContext);

    console.log(commentsData);

    const deleteComment = () => {
        if (commentToDeleteId) {
            const updatedComments = commentsData.comments.filter(comment => comment.id !== commentToDeleteId);
            setCommentsData(updatedComments);
            setCommentToDeleteId(null);
            setIsOpenModal(false);
        } else {
            // check if it is a reply. how?
            commentsData.comments.forEach(comm => {
                if (comm.replies.length > 0) {
                    // Check if the id matches any of these replies.
                    const reply = comm.replies.find(rep => rep.id == replyToDeleteId);

                    if (reply) {
                        const updateReps = comm.replies.filter(rep => rep.id !== replyToDeleteId);
                        comm.replies = updateReps;
                    }
                }
            });

            setReplyToDeleteId(null);
            setIsOpenModal(false);
        }
    }

    const handleCancel = () => {
        setIsOpenModal(false);
        setCommentToDeleteId(null);
        setReplyToDeleteId(null);
    }

    const handleDelete = () => {
        deleteComment();
    }

    // Prevent body scrolling when modal is open.
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => document.body.style.overflow = '';
    }, []);

    return (
        <div className='modal'>
            <div className='modal-container'>
                <h3 className='modal-header'>Delete comment</h3>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className='modal-actions'>
                    <button className='secondary-btn' onClick={handleCancel}>No, cancel</button>
                    <button className='danger-btn' onClick={handleDelete}>Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;
