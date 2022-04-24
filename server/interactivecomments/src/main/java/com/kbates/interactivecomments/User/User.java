package com.kbates.interactivecomments.User;

import com.kbates.interactivecomments.Comment.Comment;

import javax.persistence.*;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userId;
    private String username;
    private String image;

    @OneToMany(mappedBy = "user")
    private List<Comment> comments;

    public User() {}

    public User(String username, String image, List<Comment> comments) {
        this.username = username;
        this.image = image;
        this.comments = comments;
    }

    public long getUserId() {
        return userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
