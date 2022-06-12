package com.kbates.interactivecomments.reply;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.kbates.interactivecomments.comment.Comment;
import com.kbates.interactivecomments.user.User;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long replyId;
    private String content;
    private LocalDate createdAt;
    private Integer score;
    private String replyingTo;

    @ManyToOne
    @JoinColumn(name = "commentId")
    @JsonIgnore
    private Comment comment;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    public Reply() {
    }

    public Reply(String content, LocalDate createdAt, Integer score, String replyingTo, Comment comment, User user) {
        this.content = content;
        this.createdAt = createdAt;
        this.score = score;
        this.replyingTo = replyingTo;
        this.comment = comment;
        this.user = user;
    }

    public Long getReplyId() {
        return replyId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getReplyingTo() {
        return replyingTo;
    }

    public void setReplyingTo(String replyingTo) {
        this.replyingTo = replyingTo;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
