import React from 'react';
import Comment from './Comment';
import CommentsWithReplies from './CommentsWithReplies';

const Comments = (props) => {
    const { comments, currentUser, deleteComment, setIsOpenModal, setCommentToDeleteId } = props;

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
                        setIsOpenModal={setIsOpenModal}
                        setCommentToDeleteId={setCommentToDeleteId}
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
                        deleteComment={deleteComment}
                        setIsOpenModal={setIsOpenModal}
                        setCommentToDeleteId={setCommentToDeleteId}
                    />)
                }
            })}
        </div>
    )
}

export default Comments;
