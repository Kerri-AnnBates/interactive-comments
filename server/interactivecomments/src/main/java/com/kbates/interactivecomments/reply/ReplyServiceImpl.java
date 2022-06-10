package com.kbates.interactivecomments.reply;

import org.springframework.stereotype.Service;

@Service(value = "replyService")
public class ReplyServiceImpl implements ReplyService {
    private final ReplyRepository replyRepository;

    public ReplyServiceImpl(ReplyRepository replyRepository) {
        this.replyRepository = replyRepository;
    }

    @Override
    public Reply addReply(Reply reply) {
        return replyRepository.save(reply);
    }
}
