package com.kbates.interactivecomments.reply;

import com.kbates.interactivecomments.comment.Comment;
import com.kbates.interactivecomments.user.User;

import java.util.List;

public interface ReplyService {
    Reply addReply(Reply reply);
    Reply getReplyById(Long id);
    List<Reply> getAllRepliesForComment(Long id);
    Reply updateReplyById(Long id, Reply replyUpdates);
    void deleteReplyById(Long id);
}
