import React, { useContext, useEffect, useState } from 'react';
import CommentsContext from '../contexts/CommentsContext';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Comment from './Comment';
import CommentsWithReplies from './CommentsWithReplies';
import { getAllComments, getCurrentUser } from '../api/api';

const Comments = (props) => {
    const {
        setIsOpenModal,
        setCommentToDeleteId,
        setReplyToDeleteId,
        setIsEditModalOpen,
        setCommentToEditId,
        setReplyToEditId,
    } = props;

    const [commentsData, setCommentsData] = useContext(CommentsContext);
    const [currentUserContext, setCurrentUserContext] = useContext(CurrentUserContext);

    const [isLoading, setIsLoading] = useState(false);

    const updateVotes = (id, score, parentId = null) => {

        if (commentsData) {
            let comment;

            if (!parentId) {
                comment = commentsData.comments.find((comm) => comm.id === id);
                comment.score = score;
            } else {
                // Find parent comment
                const comment = commentsData.comments.find((comm) => comm.id === parentId);
                let reply = comment.replies.find((comm) => comm.id === id);
                reply.score = score;

                // update replies to the parent
                const replies = comment.replies.map(currReply => {
                    if (currReply.id === id) {
                        Object.assign(currReply, reply);
                    }

                    return currReply;
                });

                comment.replies = replies;
            }

            const updatedComments = commentsData.comments.map(currComm => {
                if (currComm.id === id) {
                    Object.assign(currComm, comment);
                }

                return currComm;
            });

            setCommentsData({
                ...commentsData,
                comments: updatedComments
            });
        }
    }

    useEffect(() => {
        getCurrentUser().then(data => console.log(data));
    }, []);

    useEffect(() => {
        getAllComments().then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        if (commentsData) {
            console.log(commentsData);
            commentsData.comments.sort((a, b) => b.score - a.score);
        }
    }, [commentsData?.comments]);

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
                            setReplyToEditId={setReplyToEditId}
                            setCommentToEditId={setCommentToEditId}
                            setCommentsData={setCommentsData}
                            updateVotes={updateVotes}
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
                            setCommentsData={setCommentsData}
                            updateVotes={updateVotes}
                        />)
                    }
                })}
            </div>) : (<p>Loading...</p>)}
        </>
    )
}

export default Comments;
