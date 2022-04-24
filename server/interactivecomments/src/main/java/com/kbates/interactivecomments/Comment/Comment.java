package com.kbates.interactivecomments.Comment;

import com.kbates.interactivecomments.User.User;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long commentId;
    private String content;
    private Date createdAt;
    private int score;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    public Comment() {
    }

    public Comment(String content, Date createdAt, int score, User user) {
        this.content = content;
        this.createdAt = createdAt;
        this.score = score;
        this.user = user;
    }

    public long getCommentId() {
        return commentId;
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

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
