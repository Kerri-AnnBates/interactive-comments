package com.kbates.interactivecomments.comment;

import com.kbates.interactivecomments.exception.comment.CommentNotFoundException;
import com.kbates.interactivecomments.reply.Reply;
import org.springframework.stereotype.Service;

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
            throw new CommentNotFoundException(id);
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
        Comment commentToUpdate = this.findCommentById(id);

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
        Comment commentToDelete = this.findCommentById(id);

        commentRepository.delete(commentToDelete);
    }


}
