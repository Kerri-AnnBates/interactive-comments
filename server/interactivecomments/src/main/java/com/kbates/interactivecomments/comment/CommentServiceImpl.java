package com.kbates.interactivecomments.comment;

import com.kbates.interactivecomments.reply.Reply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service(value = "commentService")
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;

    public CommentServiceImpl(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public List<Comment> findAllComments() {
        List<Comment> listOfComments = commentRepository.findAll();

        return listOfComments;
    }

    @Override
    public Comment findCommentById(Long id) {
        Optional<Comment> commentOptional = commentRepository.findById(id);

        if (!commentOptional.isPresent()) {
            throw new EntityNotFoundException("Comment with id " + id + " not found!");
        }

        Comment comment = commentOptional.get();
        return comment;
    }

    @Override
    public Comment addNewComment(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public Comment updateCommentById(Long id, Comment comment) {
        Optional<Comment> commentOptional = commentRepository.findById(id);

        if(commentOptional.isEmpty()) {
            throw new EntityNotFoundException("Comment by id: " + id + " not found!");
        }

        Comment commentToUpdate = commentOptional.get();

        if (comment.getContent() != null) {
            commentToUpdate.setContent(comment.getContent());
        }

        if (comment.getScore() != null) {
            commentToUpdate.setScore(comment.getScore());
        }
        
        if (comment.getCreatedAt() != null) {
            commentToUpdate.setCreatedAt(comment.getCreatedAt());
        }
        
        if (comment.getReplies().size() > 0) {
            for (Reply reply: comment.getReplies()) {
                commentToUpdate.getReplies().add(reply);
            }
        }

        return commentRepository.save(commentToUpdate);
    }

    @Override
    public void deleteCommentById(Long id) {
        Optional<Comment> commOpt = commentRepository.findById(id);

        if (commOpt.isEmpty()) {
            throw new EntityNotFoundException("Comment not found by id " + id);
        }

        Comment commentToDelete = commOpt.get();

        commentRepository.delete(commentToDelete);
    }


}
