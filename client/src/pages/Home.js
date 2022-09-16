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
    const [updated, setUpdated] = useState(false);
    const [added, setAdded] = useState(false);

    const confirmDeletion = () => {
        setDeleted(!deleted);
    }

    const confirmUpdate = () => {
        setUpdated(!updated);
    }

    const confirmAddition = () => {
        setAdded(!added);
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
    }, [deleted, added, updated]);

    return (
        <main className='home'>
            <div className='container'>
                {isLoading ? (<p>Loading...</p>) : (
                    <>
                        <Comments
                            confirmDeletion={confirmDeletion}
                            confirmAddition={confirmAddition}
                            confirmUpdate={confirmUpdate}
                        />
                        <AddComment confirmAddition={confirmAddition} />
                    </>
                )}
            </div>
        </main>
    )
}

export default Home;
