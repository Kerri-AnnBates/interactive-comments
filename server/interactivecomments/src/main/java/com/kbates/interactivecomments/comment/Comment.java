package com.kbates.interactivecomments.comment;

import com.kbates.interactivecomments.reply.Reply;
import com.kbates.interactivecomments.user.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long commentId;
    private String content;
    private LocalDate createdAt;
    private Integer score;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @OneToMany(mappedBy = "comment")
    private List<Reply> replies;

    public Comment() {
    }

    public Comment(String content, LocalDate createdAt, Integer score, User user, List<Reply> replies) {
        this.content = content;
        this.createdAt = createdAt;
        this.score = score;
        this.user = user;
        this.replies = replies;
    }

    public Long getCommentId() {
        return commentId;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Reply> getReplies() {
        return replies;
    }

    public void setReplies(List<Reply> replies) {
        this.replies = replies;
    }
}
