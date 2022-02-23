import React, { useContext } from 'react';
import CommentsContext from '../contexts/CommentsContext';
import Comment from './Comment';
import CommentsWithReplies from './CommentsWithReplies';

const Comments = (props) => {
    const {
        setIsOpenModal,
        setCommentToDeleteId,
        setReplyToDeleteId,
        setIsEditModalOpen,
        setCommentToEditId,
    } = props;

    const [commentsData, setCommentsData] = useContext(CommentsContext);

    console.log(commentsData);

    return (
        <>
            {commentsData ? (<div className='comments'>
                {commentsData.comments && commentsData.comments.map(comment => {
                    if (comment.replies.length > 0) {
                        return (<CommentsWithReplies
                            id={comment.id}
                            content={comment.content}
                            createdAt={comment.createdAt}
                            key={comment.id}
                            replies={comment.replies}
                            vote={comment.score}
                            user={comment.user}
                            currentUser={commentsData.currentUser}
                            setIsOpenModal={setIsOpenModal}
                            setCommentToDeleteId={setCommentToDeleteId}
                            setReplyToDeleteId={setReplyToDeleteId}
                            setIsEditModalOpen={setIsEditModalOpen}
                        />)
                    } else {
                        return (<Comment
                            id={comment.id}
                            content={comment.content}
                            createdAt={comment.createdAt}
                            key={comment.id}
                            vote={comment.score}
                            user={comment.user}
                            currentUser={commentsData.currentUser}
                            setIsOpenModal={setIsOpenModal}
                            setCommentToDeleteId={setCommentToDeleteId}
                            setIsEditModalOpen={setIsEditModalOpen}
                            setCommentToEditId={setCommentToEditId}
                        />)
                    }
                })}
            </div>) : (<p>Loading...</p>)}
        </>
    )
}

export default Comments;
