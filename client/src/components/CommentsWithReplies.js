import React from 'react'
import Comment from './Comment';

const CommentsWithReplies = (props) => {
    const { id,
        content,
        createdAt,
        replies,
        vote,
        user,
        currentUser,
        setIsOpenModal,
        setCommentToDeleteId,
        setReplyToDeleteId,
        setIsEditModalOpen,
        setReplyToEditId,
        setCommentToEditId,
        updateVotes,
    } = props;

    return (
        <>
            <Comment
                id={id}
                content={content}
                createdAt={createdAt}
                vote={vote}
                user={user}
                currentUser={currentUser}
                setIsOpenModal={setIsOpenModal}
                setCommentToDeleteId={setCommentToDeleteId}
                setIsEditModalOpen={setIsEditModalOpen}
                updateVotes={updateVotes}
            />

            <div className='replies'>
                {replies.map(reply => (
                    <Comment
                        id={reply.id}
                        content={reply.content}
                        createdAt={reply.createdAt}
                        vote={reply.score}
                        user={reply.user}
                        replyingTo={reply.replyingTo}
                        key={reply.id}
                        currentUser={currentUser}
                        parentId={reply.parentId}
                        setIsOpenModal={setIsOpenModal}
                        setReplyToDeleteId={setReplyToDeleteId}
                        setIsEditModalOpen={setIsEditModalOpen}
                        setReplyToEditId={setReplyToEditId}
                        setCommentToEditId={setCommentToEditId}
                        updateVotes={updateVotes}
                    />))}
            </div>
        </>
    )
}

export default CommentsWithReplies;
