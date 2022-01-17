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

    return (
        <main className='home'>
            <div className='container'>
                <Comments comments={comments} />
                <AddComment currentUser={currentUser} />
            </div>
        </main>
    )
}

export default Home;
