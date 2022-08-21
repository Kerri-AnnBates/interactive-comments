import React, { useState, useEffect, useContext } from 'react';
import AddComment from '../components/AddComment';
import Comments from '../components/Comments';
import EditCommentModal from '../components/EditCommentModal';
import CommentsContext from '../contexts/CommentsContext';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { getCurrentUser, getAllComments } from '../api/api';

const Home = () => {
    const [comments, setComments] = useContext(CommentsContext);
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    const confirmDeletion = () => {
        setDeleted(!deleted);
    }

    useEffect(() => {
        getCurrentUser().then(({ data }) => {
            setCurrentUser(data);
        }).catch(err => console.log(err));
    }, []);

    useEffect(() => {
        getAllComments().then(({ data }) => {
            const sortedComments = data.sort((a, b) => b.score - a.score);
            setComments(sortedComments);
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
        });
    }, [deleted]);

    return (
        <main className='home'>
            <div className='container'>
                {isLoading ? (<p>Loading...</p>) : (
                    <>
                        <Comments
                            confirmDeletion={confirmDeletion}
                        />
                        <AddComment />
                    </>
                )}
            </div>
        </main>
    )
}

export default Home;
