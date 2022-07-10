package com.kbates.interactivecomments.user;

import com.kbates.interactivecomments.exception.user.UserNotFoundException;
import org.springframework.stereotype.Service;

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

        if (userOpt.isEmpty()) {
            throw new UserNotFoundException(id);
        }

        return userOpt.get();
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, User user) {

        User userToUpdate = this.getUserById(id);

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
        User userToDelete = this.getUserById(id);

        userRepository.delete(userToDelete);
    }
}
