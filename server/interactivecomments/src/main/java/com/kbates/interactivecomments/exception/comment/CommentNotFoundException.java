package com.kbates.interactivecomments.exception.comment;

public class CommentNotFoundException extends RuntimeException {
    public CommentNotFoundException(Long id) {
        super("Comment with id " + id + " not found!");
    }
}
