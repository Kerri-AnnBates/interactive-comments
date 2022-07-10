package com.kbates.interactivecomments.exception.reply;

public class ReplyNotFoundException extends RuntimeException {
    public ReplyNotFoundException(Long id) {
        super("Reply with id " + id + " not found!");
    }
}
