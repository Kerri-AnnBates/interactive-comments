import React from 'react';
import Comment from './Comment';
import CommentsWithReplies from './CommentsWithReplies';

const Comments = ({ comments, currentUser }) => {

    return (
        <div className='comments'>
            {comments.map(comment => {
                if (comment.replies.length > 0) {
                    return (<CommentsWithReplies
                        id={comment.id}
                        content={comment.content}
                        createdAt={comment.createdAt}
                        key={comment.id}
                        replies={comment.replies}
                        vote={comment.score}
                        user={comment.user}
                        currentUser={currentUser}
                    />)
                } else {
                    return (<Comment
                        id={comment.id}
                        content={comment.content}
                        createdAt={comment.createdAt}
                        key={comment.id}
                        vote={comment.score}
                        user={comment.user}
                        currentUser={currentUser}
                    />)
                }
            })}
        </div>
    )
}

export default Comments;
