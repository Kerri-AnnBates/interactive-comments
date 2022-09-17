import React, { useContext, useEffect } from 'react';
import CommentsContext from '../contexts/CommentsContext';
import CommentsWithReplies from './CommentsWithReplies';

const Comments = (props) => {
    const {
        confirmDeletion,
        confirmAddition,
        confirmUpdate
    } = props;

    const [comments] = useContext(CommentsContext);

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
                            confirmAddition={confirmAddition}
                            confirmUpdate={confirmUpdate}
                        />)
                    })
                }
            </div>
        </>
    )
}

export default Comments;
