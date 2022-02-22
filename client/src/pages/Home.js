import React, { useState, useEffect, useContext } from 'react';
import data from '../data/data.json';
import AddComment from '../components/AddComment';
import Comments from '../components/Comments';
import DeleteModal from '../components/DeleteModal';
import EditCommentModal from '../components/EditCommentModal';
import CommentsContext from '../contexts/CommentsContext';

const Home = () => {
    const [commentsData, setCommentsData] = useContext(CommentsContext);
    const [isModalOpen, setIsOpenModal] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [commentToDeleteId, setCommentToDeleteId] = useState(null);
    const [replyToDeleteId, setReplyToDeleteId] = useState(null);
    const [commentToEditId, setCommentToEditId] = useState(null);
    const [replyToEdit, setReplyToEdit] = useState(null);

    useEffect(() => {
        setCommentsData(data);
    }, []);

    return (
        <main className='home'>
            <div className='container'>
                <Comments
                    setIsOpenModal={setIsOpenModal}
                    setIsEditModalOpen={setIsEditModalOpen}
                    setCommentToDeleteId={setCommentToDeleteId}
                    setReplyToDeleteId={setReplyToDeleteId}
                    setCommentToEditId={setCommentToEditId}
                />
                <AddComment commentsData={commentsData} setCommentsData={setCommentsData} />
            </div>
            {isModalOpen && (<DeleteModal
                setIsOpenModal={setIsOpenModal}
                setCommentToDeleteId={setCommentToDeleteId}
                setReplyToDeleteId={setReplyToDeleteId}
                commentToDeleteId={commentToDeleteId}
                replyToDeleteId={replyToDeleteId}
            />)}
            {isEditModalOpen && (<EditCommentModal
                setIsEditModalOpen={setIsEditModalOpen}
                commentToEditId={commentToEditId}
            />)}
        </main>
    )
}

export default Home;
