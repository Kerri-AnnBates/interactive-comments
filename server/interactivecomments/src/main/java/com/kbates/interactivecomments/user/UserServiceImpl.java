package com.kbates.interactivecomments.user;

import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

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

    @Override
    public User updateUser(Long id, User user) {
        Optional<User> userOpt = userRepository.findById(id);

        if (userOpt.isEmpty()) {
            throw new EntityNotFoundException("User not found by id: " + id);
        }

        User userToUpdate = userOpt.get();

        if (user.getUsername() != null) {
            userToUpdate.setUsername(user.getUsername());
        }

        if (user.getImage() != null) {
            userToUpdate.setImage(user.getImage());
        }

        return userRepository.save(userToUpdate);
    }

    @Override
    public void deleteUser(Long id) {
        Optional<User> userOpt = userRepository.findById(id);

        if (userOpt.isEmpty()) {
            throw new EntityNotFoundException("User not found by id: " + id);
        }

        User userToDelete = userOpt.get();

        userRepository.delete(userToDelete);
    }

}
