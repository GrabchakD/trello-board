package com.board.services;

import com.board.model.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {

    Optional<List<Task>> getAll();
}
