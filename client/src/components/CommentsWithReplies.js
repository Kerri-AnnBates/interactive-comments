import React from 'react'
import Comment from './Comment';

const CommentsWithReplies = (props) => {
    const { id,
        content,
        createdAt,
        replies,
        user,
        confirmDeletion,
    } = props;

    return (
        <>
            <Comment
                id={id}
                content={content}
                createdAt={createdAt}
                user={user}
                confirmDeletion={confirmDeletion}
                parentId={id}
            />

            {replies.length > 0 && <div className='replies'>
                {replies.map(reply => (
                    <Comment
                        id={reply.id}
                        content={reply.content}
                        createdAt={reply.createdAt}
                        user={reply.user}
                        replyingTo={reply.replyingTo}
                        key={`reply-${reply.id}`}
                        confirmDeletion={confirmDeletion}
                        parentId={id}
                    />))}
            </div>}
        </>
    )
}

export default CommentsWithReplies;
