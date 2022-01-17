import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import data from '../data/data.json';
import CommentsWithReplies from './CommentsWithReplies';

const Comments = ({ comments }) => {

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
                    />)
                } else {
                    return (<Comment
                        id={comment.id}
                        content={comment.content}
                        createdAt={comment.createdAt}
                        key={comment.id}
                        vote={comment.score}
                        user={comment.user}
                    />)
                }
            })}
        </div>
    )
}

export default Comments;
