package com.kbates.interactivecomments.reply;

import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

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

    @Override
    public Reply getReplyById(Long id) {
        Optional<Reply> replyOpt = replyRepository.findById(id);

        if(replyOpt.isEmpty()) {
            throw new EntityNotFoundException("Reply not found by id: " + id);
        }

        Reply reply = replyOpt.get();

        return reply;
    }

    @Override
    public Reply updateReplyById(Long id, Reply replyUpdates) {
        Reply reply = this.getReplyById(id);

        if (replyUpdates.getContent() != null) {
            reply.setContent(replyUpdates.getContent());
        }

        if (replyUpdates.getScore() != null) {
            reply.setScore(replyUpdates.getScore());
        }

        return replyRepository.save(reply);
    }

    @Override
    public void deleteReplyById(Long id) {
        Reply replyToDelete = this.getReplyById(id);
        replyRepository.delete(replyToDelete);
    }
}
