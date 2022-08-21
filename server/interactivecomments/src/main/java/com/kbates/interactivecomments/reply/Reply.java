package com.kbates.interactivecomments.reply;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.kbates.interactivecomments.comment.Comment;
import com.kbates.interactivecomments.user.User;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String content;
    private Integer score;

    @Column(name = "isReply", columnDefinition = "boolean default true")
    private Boolean isReply = true;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAt;

    @Column(updatable = false)
    private String replyingTo;

    @ManyToOne
    @JoinColumn(name = "commentId")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
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

    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Boolean getIsReply() {
        return isReply;
    }

    public void setIsReply(Boolean isReply) {
        this.isReply = isReply;
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
