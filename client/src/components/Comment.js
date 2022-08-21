import React, { useContext, useState } from 'react';
import Vote from './Vote';
import UserActions from './UserActions';
import AddComment from './AddComment';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditBox from './EditBox';

const Comment = (props) => {
    const { id,
        content,
        createdAt,
        replyingTo,
        vote,
        user,
        confirmDeletion,
        parentId,
        updateVotes,
    } = props;

    const [currentUser] = useContext(CurrentUserContext);
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const toggleReplyBox = () => {
        setShowReplyBox(!showReplyBox);
        setIsReplying(!isReplying);
    }

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    }

    return (
        <>
            <div className={`comment ${replyingTo ? 'reply' : ''}`}>
                <div className='content-container'>
                    <div className='comment-details'><span className='avatar'><img alt='author profile picture' src={user.image} /></span> <span className='username'>{user.username}</span> {currentUser === user.username && <span className='user-status'>You</span>} <span className='created-date'>{createdAt}</span></div>

                    {
                        !isEditing ? (<div className='comment-text'><p>{replyingTo && <span className='reply-username'>{'@' + replyingTo}</span>} {content}</p></div>) : (<EditBox />)
                    }

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
                    toggleReplyBox={toggleReplyBox}
                    toggleEditMode={toggleEditMode}
                />
            </div>

            {showReplyBox && <AddComment user={user} parentId={parentId} isReplying={isReplying} toggleReplyBox={toggleReplyBox} />}
        </>
    )
}

export default Comment;