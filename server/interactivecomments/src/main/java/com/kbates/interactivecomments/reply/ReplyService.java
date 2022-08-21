package com.kbates.interactivecomments.reply;

import java.util.List;

public interface ReplyService {
    Reply addReplyToComment(Reply reply, Long commentId);
    Reply getReplyById(Long id);
    List<Reply> getAllRepliesForComment(Long id);
    Reply updateReplyById(Long id, Reply replyUpdates);
    void deleteReplyById(Long id);
}
