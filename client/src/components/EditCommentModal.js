import React, { useContext, useEffect, useState } from 'react';
import CommentsContext from '../contexts/CommentsContext';

const EditCommentModal = ({ setIsEditModalOpen, commentToEditId }) => {

    const [commentsData, setCommentsData] = useContext(CommentsContext);
    const [input, setInput] = useState("");

    useEffect(() => {
        const commentFound = commentsData.comments.find(comment => comment.id === commentToEditId);

        if (commentFound) {
            setInput(commentFound.content);
        }
    }, []);

    const editContent = (e) => {
        e.preventDefault();

        if (commentsData) {
            let commentFound = commentsData.comments.find(comment => comment.id === commentToEditId);
            commentFound = { ...commentFound, content: input }

            const currComments = commentsData.comments.map(currComm => {
                if (currComm.id === commentToEditId) {
                    Object.assign(currComm, commentFound);
                }

                return currComm;
            });

            setCommentsData({ ...commentsData, comments: currComments });
        }

        setIsEditModalOpen(false);
    }

    const handleCommentChange = (e) => {
        setInput(e.target.value);
    }

    const handleCancel = () => {
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
