package com.kbates.interactivecomments.comment;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/comments")
public class CommentController {
    private final CommentService commentService;

    public CommentController(final CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Comment>> getAllComments() {
        List<Comment> commentsList = commentService.findAllComments();

        return new ResponseEntity<List<Comment>>(commentsList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable Long id) {
        Comment comment = commentService.findCommentById(id);

        return new ResponseEntity<Comment>(comment, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<Comment> addComment(@RequestBody Comment comment) {
        Comment newComment = commentService.addNewComment(comment);

        return new ResponseEntity<Comment>(comment, HttpStatus.OK);
    }
}
