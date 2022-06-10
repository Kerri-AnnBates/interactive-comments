package com.kbates.interactivecomments;

import com.kbates.interactivecomments.comment.Comment;
import com.kbates.interactivecomments.comment.CommentService;
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

    @Autowired
    CommentService commentService;

    @Override
    public void run(String... args) throws Exception {

        // Get current date
        LocalDate today = LocalDate.now();

        // Users
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

        // Comments
        Comment comment1 = new Comment();
        comment1.setContent("Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.");
        comment1.setCreatedAt(today.minusMonths(1));
        comment1.setScore(12);
        comment1.setUser(user2);
        commentService.addComment(comment1);

        Comment comment2 = new Comment();
        comment2.setContent("Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!");
        comment2.setCreatedAt(today.minusWeeks(2));
        comment2.setScore(5);
        comment2.setUser(user3);
        commentService.addComment(comment2);
    }
}
