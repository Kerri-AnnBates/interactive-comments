package com.kbates.interactivecomments.comment;

import java.util.List;

public interface CommentService {
    List<Comment> getAllComments();
    Comment getCommentById(Long id);
    Comment addComment(Comment comment);
}
