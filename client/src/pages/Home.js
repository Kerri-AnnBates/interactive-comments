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
    const [commentToDeleteId, setCommentToDeleteId] = useState(null);
    const [replyToDeleteId, setReplyToDeleteId] = useState(null);

    useEffect(() => {
        setCommentsData(data);
    }, []);

    return (
        <main className='home'>
            <div className='container'>
                <Comments
                    setIsOpenModal={setIsOpenModal}
                    setCommentToDeleteId={setCommentToDeleteId}
                    setReplyToDeleteId={setReplyToDeleteId}
                />
                <AddComment currentUser={commentsData?.currentUser} />
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
