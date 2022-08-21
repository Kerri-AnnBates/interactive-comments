package com.kbates.interactivecomments.reply;

import com.kbates.interactivecomments.comment.Comment;
import com.kbates.interactivecomments.comment.CommentRepository;
import com.kbates.interactivecomments.exception.comment.CommentNotFoundException;
import com.kbates.interactivecomments.exception.reply.ReplyNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service(value = "replyService")
public class ReplyServiceImpl implements ReplyService {
    private final ReplyRepository replyRepository;
    private final CommentRepository commentRepository;

    public ReplyServiceImpl(ReplyRepository replyRepository, CommentRepository commentRepository) {
        this.replyRepository = replyRepository;
        this.commentRepository = commentRepository;
    }

    @Override
    public Reply addReplyToComment(Reply reply, Long commentId) {
        Optional<Comment> commentOpt = commentRepository.findById(commentId);

        if (commentOpt.isEmpty()) {
            throw new CommentNotFoundException(commentId);
        }

        return replyRepository.save(reply);
    }

    @Override
    public Reply getReplyById(Long id) {
        Optional<Reply> replyOpt = replyRepository.findById(id);

        if(replyOpt.isEmpty()) {
            throw new ReplyNotFoundException(id);
        }

        Reply reply = replyOpt.get();

        return reply;
    }

    @Override
    public List<Reply> getAllRepliesForComment(Long id) {
        Optional<Comment> comment = commentRepository.findById(id);

        if (comment.isEmpty()) {
            throw new CommentNotFoundException(id);
        }

        return replyRepository.findByComment(comment.get());
    }


    @Override
    public Reply updateReplyById(Long id, Reply replyUpdates) {
        Reply reply = this.getReplyById(id);

        if (replyUpdates.getContent() != null) {
            reply.setContent(replyUpdates.getContent());
        }

        if (replyUpdates.getScore() != null) {
            reply.setScore(replyUpdates.getScore());
        }

        return replyRepository.save(reply);
    }

    @Override
    public void deleteReplyById(Long id) {
        Reply replyToDelete = this.getReplyById(id);
        replyRepository.delete(replyToDelete);
    }
}
