import React from 'react';
import Vote from './Vote';
import UserActions from './UserActions';

const Comment = (props) => {
    const { id,
        content,
        createdAt,
        replyingTo,
        vote,
        user,
        currentUser,
        setIsOpenModal,
        setCommentToDeleteId,
        setReplyToDeleteId,
        setIsEditModalOpen,
        setCommentToEditId
    } = props;

    return (
        <div className={`comment ${replyingTo ? 'reply' : ''}`}>
            <div className='content-container'>
                <div className='comment-details'><span className='avatar'><img alt='author profile picture' src={user.image.png} /></span> <span className='username'>{user.username}</span> {currentUser.username === user.username && <span className='user-status'>You</span>} <span className='created-date'>{createdAt}</span></div>
                <div className='comment-text'>
                    <p>{replyingTo && <span className='reply-username'>{'@' + replyingTo}</span>} {content}</p>
                </div>
            </div>

            <Vote vote={vote} />
            <UserActions
                currentUser={currentUser}
                user={user}
                id={id}
                setIsOpenModal={setIsOpenModal}
                setCommentToDeleteId={setCommentToDeleteId}
                setReplyToDeleteId={setReplyToDeleteId}
                setIsEditModalOpen={setIsEditModalOpen}
                setCommentToEditId={setCommentToEditId}
            />
        </div>
    )
}

export default Comment;