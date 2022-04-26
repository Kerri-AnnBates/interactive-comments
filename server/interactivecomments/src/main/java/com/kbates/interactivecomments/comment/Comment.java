package com.kbates.interactivecomments.Comment;

import com.kbates.interactivecomments.Reply.Reply;
import com.kbates.interactivecomments.User.User;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long commentId;
    private String content;
    private Date createdAt;
    private Integer score;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @OneToMany(mappedBy = "comment")
    private List<Reply> replies;

    public Comment() {
    }

    public Comment(String content, Date createdAt, Integer score, User user, List<Reply> replies) {
        this.content = content;
        this.createdAt = createdAt;
        this.score = score;
        this.user = user;
        this.replies = replies;
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
