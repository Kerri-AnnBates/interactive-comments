package com.kbates.interactivecomments.comment;

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
    public List<Comment> getAllComments() {
        List<Comment> listOfComments = commentRepository.findAll();

        return listOfComments;
    }

    @Override
    public Comment getCommentById(Long id) {
        Optional<Comment> commentOptional = commentRepository.findById(id);

        if (!commentOptional.isPresent()) {
            throw new EntityNotFoundException("Comment with id " + id + " not found!");
        }

        Comment comment = commentOptional.get();
        return comment;
    }

    @Override
    public Comment addComment(Comment comment) {
        return commentRepository.save(comment);
    }
}
