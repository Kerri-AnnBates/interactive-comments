package com.kbates.interactivecomments.reply;

import com.kbates.interactivecomments.user.User;

public interface ReplyService {
    Reply addReply(Reply reply);
    Reply getReplyById(Long id);
    Reply updateReplyById(Long id, Reply replyUpdates);
    void deleteReplyById(Long id);
}
