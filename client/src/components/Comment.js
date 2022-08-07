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
        setIsOpenModal,
        setCommentToDeleteId,
        setReplyToDeleteId,
        setIsEditModalOpen,
        setCommentToEditId,
        setReplyToEditId,
        updateVotes,
    } = props;

    const [currentUser] = useContext(CurrentUserContext);
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [isReply, setIsReply] = useState(false);

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
                    currentUser={currentUser}
                    user={user}
                    id={id}
                    parentId={parentId}
                    setIsOpenModal={setIsOpenModal}
                    setCommentToDeleteId={setCommentToDeleteId}
                    setReplyToDeleteId={setReplyToDeleteId}
                    setIsEditModalOpen={setIsEditModalOpen}
                    setCommentToEditId={setCommentToEditId}
                    setReplyToEditId={setReplyToEditId}
                    setShowReplyBox={setShowReplyBox}
                    showReplyBox={showReplyBox}
                    setIsReply={setIsReply}
                    isReply={isReply}
                />
            </div>
            {showReplyBox &&
                <AddComment
                    id={id}
                    user={user}
                    parentId={parentId}
                    isReply={isReply}
                    setIsReply={setIsReply}
                    setShowReplyBox={setShowReplyBox}
                />
            }
        </>
    )
}

export default Comment;