import React from 'react';
import Vote from './Vote';
import UserActions from './UserActions';

const Comment = (props) => {
    const { id, content, createdAt, replyingTo, vote, user, currentUser } = props;

    return (
        <div className={`comment ${replyingTo ? 'reply' : ''}`}>
            <div className='content-container'>
                <div className='comment-details'><span className='avatar'><img alt='author profile picture' src={user.image.png} /></span> <span className='username'>{user.username}</span> <span className='created-date'>{createdAt}</span></div>
                <div className='comment-text'>
                    <p>{replyingTo && <span className='reply-username'>{'@' + replyingTo}</span>} {content}</p>
                </div>
            </div>

            <Vote vote={vote} />
            <UserActions currentUser={currentUser} user={user} />
        </div>
    )
}

export default Comment;