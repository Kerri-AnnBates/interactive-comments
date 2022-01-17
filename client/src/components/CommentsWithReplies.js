import React from 'react'
import Comment from './Comment';

const CommentsWithReplies = (props) => {
    const { id, content, createdAt, replies, vote, user } = props;

    return (
        <>
            <Comment
                id={id}
                content={content}
                createdAt={createdAt}
                vote={vote}
                user={user}
            />

            <div className='replies'>
                {replies.map(reply => (
                    <Comment
                        id={reply.id}
                        content={reply.content}
                        createdAt={reply.createdAt}
                        vote={reply.score}
                        user={reply.user}
                        replyTo={reply.replyTo}
                        key={reply.id}
                    />))}
            </div>
        </>
    )
}

export default CommentsWithReplies;
