package com.kbates.interactivecomments.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        Optional<User> userOpt = userRepository.findById(id);

        if(userOpt.isPresent()) {
            return userOpt.get();
        } else {
            throw new EntityNotFoundException("User by id " + id + " not found!");
        }
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }
}
