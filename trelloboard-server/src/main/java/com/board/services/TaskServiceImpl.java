package com.board.services;

import com.board.dao.TaskRepository;
import com.board.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskRepository taskRepository;

    @Override
    public Optional<List<Task>> getAll() {
        return Optional.ofNullable(taskRepository.findAll());
    }
}
