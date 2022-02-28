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
        let currComments;

        if (!replyToEditId) {
            let commentFound = commentsData.comments.find(comment => comment.id === commentToEditId);
            commentFound = { ...commentFound, content: input }

            currComments = commentsData.comments.map(currComm => {
                if (currComm.id === commentToEditId) {
                    Object.assign(currComm, commentFound);
                }

                return currComm;
            });

        } else {
            let commentWithReply = commentsData.comments.find(comment => comment.id === commentToEditId);
            let reply = commentWithReply.replies.find(rep => rep.id === replyToEditId);
            const updatedReply = { ...reply, content: input }

            // Replace old reply with new reply
            const replies = commentWithReply.replies.map(rep => {
                if (rep.id === replyToEditId) {
                    Object.assign(rep, updatedReply);
                }

                return rep;
            });

            currComments = commentsData.comments.map(currComm => {
                if (currComm.id === commentToEditId) {
                    Object.assign(currComm, commentWithReply);
                }

                return currComm;
            });
        }

        setCommentsData({ ...commentsData, comments: currComments });
        handleCancel();
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
