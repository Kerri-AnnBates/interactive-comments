import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import AddComment from '../components/AddComment';
import Comments from '../components/Comments';

const Home = () => {
    const [comments, setComments] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        console.log(data);
        setComments(data.comments);
        setCurrentUser(data.currentUser);
    }, []);

    console.log(comments);

    const addComment = (newComment) => {
        const comment = {
            ...newComment,
            id: comments.length + 1,
            user: currentUser
        }

        setComments([...comments, comment]);
    }

    const deleteComment = (id) => {
        const updatedComments = comments.filter(comment => comment.id !== id);
        setComments(updatedComments);
    }

    return (
        <main className='home'>
            <div className='container'>
                <Comments comments={comments} currentUser={currentUser} deleteComment={deleteComment} />
                <AddComment currentUser={currentUser} addComment={addComment} />
            </div>
        </main>
    )
}

export default Home;
