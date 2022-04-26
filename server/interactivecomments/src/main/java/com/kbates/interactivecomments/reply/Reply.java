package com.kbates.interactivecomments.reply;

import com.kbates.interactivecomments.comment.Comment;
import com.kbates.interactivecomments.user.User;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long replyId;
    private String content;
    private Date createdAt;
    private Integer score;
    private String replyingTo;

    @ManyToOne
    @JoinColumn(name = "commentId")
    private Comment comment;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    public Reply() {
    }

    public Reply(String content, Date createdAt, Integer score, String replyingTo, Comment comment, User user) {
        this.content = content;
        this.createdAt = createdAt;
        this.score = score;
        this.replyingTo = replyingTo;
        this.comment = comment;
        this.user = user;
    }

    public long getReplyId() {
        return replyId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
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
