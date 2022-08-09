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
        parentId,
        setIsEditModalOpen,
        setReplyToEditId,
        updateVotes,
    } = props;

    const [currentUser] = useContext(CurrentUserContext);
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replying, setReplying] = useState(false);

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
                    replying={replying}
                    currentUser={currentUser}
                    user={user}
                    replyingTo={replyingTo}
                // parentId={parentId}
                // setIsEditModalOpen={setIsEditModalOpen}
                // setReplyToEditId={setReplyToEditId}
                // setShowReplyBox={setShowReplyBox}
                // showReplyBox={showReplyBox}
                // setReplying={setReplying}
                />
            </div>
            {showReplyBox &&
                <AddComment
                    id={id}
                    user={user}
                    parentId={parentId}
                    replying={replying}
                    setReplying={setReplying}
                    setShowReplyBox={setShowReplyBox}
                />
            }
        </>
    )
}

export default Comment;