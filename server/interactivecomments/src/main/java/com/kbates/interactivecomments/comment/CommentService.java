package com.kbates.interactivecomments.comment;

import java.util.List;

public interface CommentService {
    List<Comment> findAllComments();
    Comment findCommentById(Long id);
    Comment addNewComment(Comment comment);
    Comment updateCommentById(Long id, Comment comment);
}
