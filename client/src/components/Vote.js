import React, { useEffect, useState } from 'react';
import { getCommentById, getReplyById } from '../api/api';
import { updateVotes } from '../utils/updateVotes';

const Vote = ({ id, replyingTo }) => {
    const [voteCount, setVoteCount] = useState(null);
    const [voteUpdated, setVoteUpdated] = useState(false);
    const [commentDetail, setCommentDetail] = useState(null);

    useEffect(() => {
        if (!replyingTo) {
            getCommentById(id).then(({ data }) => {
                setCommentDetail(data);
                setVoteCount(data.score);
            }).catch(err => console.log(err));
        } else {
            getReplyById(id).then(({ data }) => {
                setCommentDetail(data);
                setVoteCount(data.score);
            }).catch(err => console.log(err));
        }
    }, [voteUpdated]);

    const handleVoteCount = (e) => {
        const aciton = e.target.dataset.value;
        let count = voteCount;

        if (aciton === 'plus') {
            count += 1;
        }

        if (aciton === 'minus') {
            count -= 1;
        }

        updateVotes(commentDetail, count).then((data) => {
            setVoteUpdated(!voteUpdated);
        }).catch(err => console.log(err));
    }

    return (
        <div className='vote'>
            <div className='vote-container'><button onClick={handleVoteCount} data-value='plus'>+</button>{voteCount}<button onClick={handleVoteCount} data-value='minus'>-</button></div>
        </div>
    )
}

export default Vote;
