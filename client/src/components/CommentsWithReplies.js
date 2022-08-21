import React from 'react'
import Comment from './Comment';

const CommentsWithReplies = (props) => {
    const { id,
        content,
        createdAt,
        replies,
        vote,
        user,
        confirmDeletion,
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
                confirmDeletion={confirmDeletion}
                parentId={id}
            // updateVotes={updateVotes}
            />

            {replies.length > 0 && <div className='replies'>
                {replies.map(reply => (
                    <Comment
                        id={reply.id}
                        content={reply.content}
                        createdAt={reply.createdAt}
                        vote={reply.score}
                        user={reply.user}
                        replyingTo={reply.replyingTo}
                        key={`reply-${reply.id}`}
                        confirmDeletion={confirmDeletion}
                        parentId={id}
                    // updateVotes={updateVotes}
                    />))}
            </div>}
        </>
    )
}

export default CommentsWithReplies;
