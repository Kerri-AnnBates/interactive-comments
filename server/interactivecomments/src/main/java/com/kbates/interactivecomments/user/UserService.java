package com.kbates.interactivecomments.user;

import java.util.List;

public interface UserService {
    List<User> getUsers();
    User getUserById(Long id);
    User addUser(User user);
    User updateUser(Long id, User user);
}
