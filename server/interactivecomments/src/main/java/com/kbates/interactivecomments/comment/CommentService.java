package com.kbates.interactivecomments.comment;

import java.util.List;

public interface CommentService {
    List<Comment> getAllComments();
    List<Comment> getCommentsById(Long id);
    Comment addComment(Comment comment);
}
