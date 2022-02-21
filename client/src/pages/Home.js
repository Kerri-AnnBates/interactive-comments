import React, { useState, useEffect, useContext } from 'react';
import data from '../data/data.json';
import AddComment from '../components/AddComment';
import Comments from '../components/Comments';
import DeleteModal from '../components/DeleteModal';
import EditCommentModal from '../components/EditCommentModal';
import CommentsContext from '../contexts/CommentsContext';

const Home = () => {
    const [comments, setComments] = useState([]);
    const [commentsData, setCommentsData] = useContext(CommentsContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [isModalOpen, setIsOpenModal] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [commentToDeleteId, setCommentToDeleteId] = useState(null);
    const [replyToDeleteId, setReplyToDeleteId] = useState(null);

    useEffect(() => {
        setCommentsData(data);
    }, []);

    const addComment = (newComment) => {
        const comment = {
            ...newComment,
            id: comments.length + 1,
            user: currentUser
        }

        setCommentsData([...setCommentsData.comments, comment]);
    }

    return (
        <main className='home'>
            <div className='container'>
                <Comments
                    setIsOpenModal={setIsOpenModal}
                    setCommentToDeleteId={setCommentToDeleteId}
                    setReplyToDeleteId={setReplyToDeleteId}
                />
                <AddComment currentUser={commentsData?.currentUser} addComment={addComment} />
            </div>
            {isModalOpen && (<DeleteModal
                setIsOpenModal={setIsOpenModal}
                setCommentToDeleteId={setCommentToDeleteId}
                setReplyToDeleteId={setReplyToDeleteId}
                commentToDeleteId={commentToDeleteId}
                replyToDeleteId={replyToDeleteId}
            />)}
            {/* <EditCommentModal
                commToEditId={commToEditId}
            /> */}
        </main>
    )
}

export default Home;
