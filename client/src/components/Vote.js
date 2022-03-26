import React, { useState, useEffect } from 'react';

const Vote = ({ vote, updateVotes, id, parentId }) => {
    const [voteCount, setVoteCount] = useState(vote);

    useEffect(() => {
        if (updateVotes) {
            if (parentId) {
                updateVotes(id, voteCount, parentId);
            } else {
                updateVotes(id, voteCount);
            }
        }
    }, [voteCount]);

    const handleVoteCount = (e) => {
        const aciton = e.target.dataset.value;

        if (aciton === 'plus') {
            setVoteCount((vote) => vote + 1);
        }

        if (aciton === 'minus') {
            setVoteCount((vote) => vote - 1);
        }
    }

    return (
        <div className='vote'>
            <div className='vote-container'><button onClick={handleVoteCount} data-value='plus'>+</button>{voteCount}<button onClick={handleVoteCount} data-value='minus'>-</button></div>
        </div>
    )
}

export default Vote;
