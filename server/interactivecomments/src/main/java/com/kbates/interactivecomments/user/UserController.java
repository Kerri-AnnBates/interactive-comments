package com.kbates.interactivecomments.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/")
    ResponseEntity<List<User>> findAllUsers() {
        List<User> userList = userService.getUsers();

        return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    ResponseEntity<User> findUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
    @PostMapping(value = "/")
    ResponseEntity<User> addUser(@RequestBody User newUser) {
        User addedUser = userService.addUser(newUser);

        return new ResponseEntity<User>(addedUser, HttpStatus.CREATED);
    }
}
