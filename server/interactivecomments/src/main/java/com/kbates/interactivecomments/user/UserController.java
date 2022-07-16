package com.kbates.interactivecomments.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "")
    ResponseEntity<List<User>> findAllUsers() {
        List<User> userList = userService.getUsers();

        return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    ResponseEntity<User> findUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping(value = "")
    ResponseEntity<User> addUser(@RequestBody User newUser) {
        User addedUser = userService.addUser(newUser);

        return new ResponseEntity<User>(addedUser, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        if (user.getComments() != null || user.getReplies() != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cannot update comments or replies");
        }

        User updatedUser = userService.updateUser(id, user);

        return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    ResponseEntity<User> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);

        return new ResponseEntity("User deleted", HttpStatus.OK);
    }
}
