import React from 'react'
import Comment from './Comment';

const CommentsWithReplies = (props) => {
    const { id,
        content,
        createdAt,
        replies,
        vote,
        user,
        setIsEditModalOpen,
        setReplyToEditId,
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
            // setIsOpenModal={setIsOpenModal}
            // setCommentToDeleteId={setCommentToDeleteId}
            // setIsEditModalOpen={setIsEditModalOpen}
            // updateVotes={updateVotes}
            />

            {replies.length > 0 && <div className='replies'>
                {replies.map(reply => (
                    <Comment
                        id={reply.replyId}
                        content={reply.content}
                        createdAt={reply.createdAt}
                        vote={reply.score}
                        user={reply.user}
                        replyingTo={reply.replyingTo}
                        key={`reply-${reply.replyId}`}
                    // parentId={reply.parentId}
                    // setIsEditModalOpen={setIsEditModalOpen}
                    // setReplyToEditId={setReplyToEditId}
                    // updateVotes={updateVotes}
                    />))}
            </div>}
        </>
    )
}

export default CommentsWithReplies;
