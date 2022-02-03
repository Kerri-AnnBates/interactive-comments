import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import AddComment from '../components/AddComment';
import Comments from '../components/Comments';
import DeleteModal from '../components/DeleteModal';

const Home = () => {
    const [comments, setComments] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [isModalOpen, setIsOpenModal] = useState(false);
    const [commentToDeleteId, setCommentToDeleteId] = useState(null);
    const [replyToDeleteId, setReplyToDeleteId] = useState(null);

    useEffect(() => {
        console.log(data);
        setComments(data.comments);
        setCurrentUser(data.currentUser);
    }, []);

    const addComment = (newComment) => {
        const comment = {
            ...newComment,
            id: comments.length + 1,
            user: currentUser
        }

        setComments([...comments, comment]);
    }

    const deleteComment = () => {
        if (commentToDeleteId) {
            const updatedComments = comments.filter(comment => comment.id !== commentToDeleteId);
            setComments(updatedComments);
            setCommentToDeleteId(null);
            setIsOpenModal(false);
        } else {
            // check if it is a reply. how?
            comments.forEach(comm => {
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

    return (
        <main className='home'>
            <div className='container'>
                <Comments
                    comments={comments}
                    currentUser={currentUser}
                    deleteComment={deleteComment}
                    setIsOpenModal={setIsOpenModal}
                    setCommentToDeleteId={setCommentToDeleteId}
                    setReplyToDeleteId={setReplyToDeleteId}
                />
                <AddComment currentUser={currentUser} addComment={addComment} />
            </div>
            {isModalOpen && (<DeleteModal
                setIsOpenModal={setIsOpenModal}
                setCommentToDeleteId={setCommentToDeleteId}
                setReplyToDeleteId={setReplyToDeleteId}
                deleteComment={deleteComment}
            />)}
        </main>
    )
}

export default Home;
