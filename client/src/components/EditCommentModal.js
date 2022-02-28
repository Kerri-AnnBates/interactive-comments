import React, { useContext, useEffect, useState } from 'react';
import CommentsContext from '../contexts/CommentsContext';

const EditCommentModal = ({ setIsEditModalOpen, commentToEditId, replyToEditId, setCommentToEditId, setReplyToEditId }) => {

    const [commentsData, setCommentsData] = useContext(CommentsContext);
    const [input, setInput] = useState("");

    useEffect(() => {

        // If not a reply, treat as a comment
        if (!replyToEditId) {
            const commentFound = commentsData.comments.find(comment => comment.id === commentToEditId);

            if (commentFound) {
                setInput(commentFound.content);
            }
        } else {
            const commentFound = commentsData.comments.find(comment => comment.id === commentToEditId);

            if (commentFound) {
                const reply = commentFound.replies.find(rep => rep.id === replyToEditId);

                if (reply) {
                    setInput(reply.content);
                }
            }

        }

    }, []);

    const editContent = (e) => {
        e.preventDefault();

        if (!replyToEditId) {
            let commentFound = commentsData.comments.find(comment => comment.id === commentToEditId);
            commentFound = { ...commentFound, content: input }

            const currComments = commentsData.comments.map(currComm => {
                if (currComm.id === commentToEditId) {
                    Object.assign(currComm, commentFound);
                }

                return currComm;
            });

            setCommentsData({ ...commentsData, comments: currComments });
        } else {
            let commentWithReply = commentsData.comments.find(comment => comment.id === replyToEditId.parentId);
            let tempReplies;

            // Get the parent comment
            // Find the reply by id
        }

        setIsEditModalOpen(false);
    }

    const handleCommentChange = (e) => {
        setInput(e.target.value);
    }

    const handleCancel = () => {
        setReplyToEditId(null);
        setCommentToEditId(null);
        setIsEditModalOpen(false);
    }

    return (
        <div className='modal'>
            <div className='modal-container'>
                <form onSubmit={editContent}>
                    <textarea name='edit' className='edit-comment' value={input} onChange={handleCommentChange}></textarea>
                    <button className='secondary-btn' onClick={handleCancel}>No, cancel</button>
                    <button className='danger-btn'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditCommentModal;
