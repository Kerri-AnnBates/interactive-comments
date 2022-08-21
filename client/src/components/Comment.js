import React, { useContext, useState } from 'react';
import Vote from './Vote';
import UserActions from './UserActions';
import AddComment from './AddComment';
import CurrentUserContext from '../contexts/CurrentUserContext';

const Comment = (props) => {
    const { id,
        content,
        createdAt,
        replyingTo,
        vote,
        user,
        confirmDeletion,
        parentId,
        setIsEditModalOpen,
        setReplyToEditId,
        updateVotes,
    } = props;

    const [currentUser] = useContext(CurrentUserContext);
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [isReplying, setIsReplying] = useState(false);

    const toggleReplyBox = () => {
        setShowReplyBox(!showReplyBox);
        setIsReplying(!isReplying);
    }

    return (
        <>
            <div className={`comment ${replyingTo ? 'reply' : ''}`}>
                <div className='content-container'>
                    <div className='comment-details'><span className='avatar'><img alt='author profile picture' src={user.image} /></span> <span className='username'>{user.username}</span> {currentUser === user.username && <span className='user-status'>You</span>} <span className='created-date'>{createdAt}</span></div>
                    <div className='comment-text'>
                        <p>{replyingTo && <span className='reply-username'>{'@' + replyingTo}</span>} {content}</p>
                    </div>
                </div>

                <Vote vote={vote} updateVotes={updateVotes} id={id} parentId={parentId} />
                <UserActions
                    id={id}
                    isReplying={isReplying}
                    currentUser={currentUser}
                    user={user}
                    replyingTo={replyingTo}
                    confirmDeletion={confirmDeletion}
                    parentId={parentId}
                    // setIsEditModalOpen={setIsEditModalOpen}
                    // setReplyToEditId={setReplyToEditId}
                    toggleReplyBox={toggleReplyBox}
                />
            </div>
            {showReplyBox &&
                <AddComment
                    user={user}
                    parentId={parentId}
                    isReplying={isReplying}
                    toggleReplyBox={toggleReplyBox}
                />
            }
        </>
    )
}

export default Comment;