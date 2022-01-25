import React from 'react'
import Comment from './Comment';

const CommentsWithReplies = (props) => {
    const { id, content, createdAt, replies, vote, user, currentUser } = props;

    return (
        <>
            <Comment
                id={id}
                content={content}
                createdAt={createdAt}
                vote={vote}
                user={user}
                currentUser={currentUser}
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
                    />))}
            </div>
        </>
    )
}

export default CommentsWithReplies;
