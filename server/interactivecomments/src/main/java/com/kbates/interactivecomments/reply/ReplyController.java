package com.kbates.interactivecomments.reply;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/replies")
public class ReplyController {
    private ReplyService replyService;

    public ReplyController(ReplyService replyService) {
        this.replyService = replyService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reply> findReplyById(@PathVariable Long id) {
        return new ResponseEntity<Reply>(replyService.getReplyById(id), HttpStatus.OK);
    }

    @GetMapping("/comment/{id}")
    public ResponseEntity<List<Reply>> findAllRepliesByCommentId(@PathVariable Long id) {
        return new ResponseEntity<List<Reply>>(replyService.getAllRepliesForComment(id), HttpStatus.OK);
    }

    @PostMapping("/comment/{id}")
    public ResponseEntity<Reply> addNewReply(@RequestBody Reply reply, @PathVariable Long id) {
        return new ResponseEntity<Reply>(replyService.addReplyToComment(reply, id), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reply> updateReplyById(@PathVariable Long id, @RequestBody Reply reply) {
        return new ResponseEntity<Reply>(replyService.updateReplyById(id, reply), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Reply> deleteReplyById(@PathVariable Long id) {
        replyService.deleteReplyById(id);

        return new ResponseEntity("Reply Deleted", HttpStatus.NO_CONTENT);
    }

}
