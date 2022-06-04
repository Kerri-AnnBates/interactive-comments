package com.kbates.interactivecomments;

import com.kbates.interactivecomments.comment.Comment;
import com.kbates.interactivecomments.user.User;
import com.kbates.interactivecomments.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class SeedData implements CommandLineRunner {
    @Autowired
    UserService userService;

    @Override
    public void run(String... args) throws Exception {

        // Get current date
        LocalDate today = LocalDate.now();

        // Create current users
        User user1 = new User();
        User user2 = new User();
        User user3 = new User();
        User user4 = new User();

        user1.setUsername("juliusomo");
        user1.setImage("./images/avatars/image-juliusomo.png");
        userService.addUser(user1);

        user2.setUsername("amyrobson");
        user2.setImage("./images/avatars/image-amyrobson.png");
        userService.addUser(user2);

        user3.setUsername("maxblagun");
        user3.setImage("./images/avatars/image-maxblagun.png");
        userService.addUser(user3);

        user4.setUsername("ramsesmiron");
        user4.setImage("./images/avatars/image-ramsesmiron.png");
        userService.addUser(user4);
    }
}
