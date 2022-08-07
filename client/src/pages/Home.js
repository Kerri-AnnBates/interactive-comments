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
    const [replyToEditId, setReplyToEditId] = useState(null);

    useEffect(() => {
        // TODO: Fix sorting, it's off by 1 when dynamically changing?
        data.comments.sort((a, b) => b.score - a.score);

        setCommentsData(data);
    }, []);

    return (
        <main className='home'>
            <div className='container'>
                <Comments
                // setIsOpenModal={setIsOpenModal}
                // setIsEditModalOpen={setIsEditModalOpen}
                // setCommentToDeleteId={setCommentToDeleteId}
                // setReplyToDeleteId={setReplyToDeleteId}
                // setCommentToEditId={setCommentToEditId}
                // setReplyToEditId={setReplyToEditId}
                />
                <AddComment />
            </div>
            {/* {isModalOpen && (<DeleteModal
                setIsOpenModal={setIsOpenModal}
                setCommentToDeleteId={setCommentToDeleteId}
                setReplyToDeleteId={setReplyToDeleteId}
                commentToDeleteId={commentToDeleteId}
                replyToDeleteId={replyToDeleteId}
            />)}
            {isEditModalOpen && (<EditCommentModal
                setIsEditModalOpen={setIsEditModalOpen}
                setCommentToEditId={setCommentToEditId}
                setReplyToEditId={setReplyToEditId}
                commentToEditId={commentToEditId}
                replyToEditId={replyToEditId}
            />)} */}
        </main>
    )
}

export default Home;
