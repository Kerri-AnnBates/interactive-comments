package com.kbates.interactivecomments;

import com.kbates.interactivecomments.comment.Comment;
import com.kbates.interactivecomments.comment.CommentService;
import com.kbates.interactivecomments.reply.Reply;
import com.kbates.interactivecomments.reply.ReplyService;
import com.kbates.interactivecomments.user.User;
import com.kbates.interactivecomments.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
public class SeedData implements CommandLineRunner {
    @Autowired
    UserService userService;

    @Autowired
    CommentService commentService;

    @Autowired
    ReplyService replyService;

    @Override
    public void run(String... args) throws Exception {

        // Get current date
        LocalDateTime today = LocalDateTime.now();

        // Users
        User user1 = new User();
        user1.setUsername("juliusomo");
        user1.setImage("./images/avatars/image-juliusomo.png");
        userService.addUser(user1);

        User user2 = new User();
        user2.setUsername("amyrobson");
        user2.setImage("./images/avatars/image-amyrobson.png");
        userService.addUser(user2);

        User user3 = new User();
        user3.setUsername("maxblagun");
        user3.setImage("./images/avatars/image-maxblagun.png");
        userService.addUser(user3);

        User user4 = new User();
        user4.setUsername("ramsesmiron");
        user4.setImage("./images/avatars/image-ramsesmiron.png");
        userService.addUser(user4);

        // Comments
        Comment comment1 = new Comment();
        comment1.setContent("Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.");
        comment1.setCreatedAt(today.minusMonths(1));
        comment1.setScore(12);
        comment1.setUser(user2);
        commentService.addNewComment(comment1);

        Comment comment2 = new Comment();
        comment2.setContent("Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!");
        comment2.setCreatedAt(today.minusWeeks(2));
        comment2.setScore(5);
        comment2.setUser(user3);
        commentService.addNewComment(comment2);

        // Replies
        Reply reply1 = new Reply();
        reply1.setContent("If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.");
        reply1.setCreatedAt(today.minusWeeks(1));
        reply1.setScore(4);
        reply1.setReplyingTo(user3.getUsername());
        reply1.setUser(user4);
        reply1.setComment(comment2);
        reply1.setIsReply(true);
        replyService.addReplyToComment(reply1, comment2.getId());


        Reply reply2 = new Reply();
        reply2.setContent("I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.");
        reply2.setCreatedAt(today.minusDays(2));
        reply2.setScore(2);
        reply2.setReplyingTo(user4.getUsername());
        reply2.setUser(user1);
        reply2.setComment(comment2);
        reply2.setIsReply(true);
        replyService.addReplyToComment(reply2, comment2.getId());
    }
}
