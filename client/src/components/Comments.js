import React, { useContext, useEffect, useState } from 'react';
import CommentsContext from '../contexts/CommentsContext';
import CommentsWithReplies from './CommentsWithReplies';

const Comments = (props) => {
    const {
        setIsEditModalOpen,
        setReplyToEditId,
    } = props;

    const [comments, setComments] = useContext(CommentsContext);

    const updateVotes = (id, score, parentId = null) => {

        if (comments) {
            let comment;

            if (!parentId) {
                comment = comments.find((comm) => comm.id === id);
                comment.score = score;
            } else {
                // Find parent comment
                const comment = comments.find((comm) => comm.id === parentId);
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

            const updatedComments = comments.map(currComm => {
                if (currComm.id === id) {
                    Object.assign(currComm, comment);
                }

                return currComm;
            });

            setComments({
                ...comments,
                comments: updatedComments
            });
        }
    }

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
                            id={comment.commentId}
                            content={comment.content}
                            createdAt={comment.createdAt}
                            key={comment.commentId}
                            replies={comment.replies}
                            vote={comment.score}
                            user={comment.user}
                        // setIsEditModalOpen={setIsEditModalOpen}
                        // setReplyToEditId={setReplyToEditId}
                        // setComments={setComments}
                        // updateVotes={updateVotes}
                        />)
                    })
                }
            </div>
        </>
    )
}

export default Comments;
