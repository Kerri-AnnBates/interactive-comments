import React, { useContext, useEffect } from 'react';
import CommentsContext from '../contexts/CommentsContext';
import CommentsWithReplies from './CommentsWithReplies';

const Comments = (props) => {
    const {
        confirmDeletion,
    } = props;

    const [comments, setComments] = useContext(CommentsContext);

    useEffect(() => {
        if (comments) {
            comments.sort((a, b) => b.score - a.score);
        }
    }, [comments?.comments]);

    return (
        <>
            <div className='comments'>
                {
                    comments.map(comment => {

                        return (<CommentsWithReplies
                            id={comment.id}
                            content={comment.content}
                            createdAt={comment.createdAt}
                            key={comment.id}
                            replies={comment.replies}
                            user={comment.user}
                            confirmDeletion={confirmDeletion}
                        />)
                    })
                }
            </div>
        </>
    )
}

export default Comments;
