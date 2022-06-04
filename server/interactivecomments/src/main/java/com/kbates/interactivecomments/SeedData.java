package com.kbates.interactivecomments;

import com.kbates.interactivecomments.comment.Comment;
import com.kbates.interactivecomments.user.User;
import com.kbates.interactivecomments.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class SeedData implements CommandLineRunner {
    @Autowired
    UserService userService;

    @Override
    public void run(String... args) throws Exception {

        // Create current user
        User user1 = new User();
        user1.setUsername("juliusomo");
        juliusomo.setImage("./images/avatars/image-juliusomo.png");
        juliusomo.getComments().add(new Comment());
    }
}
