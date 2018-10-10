package com.board.controllers;

import com.board.model.Task;
import com.board.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TaskController {

    @Autowired
    TaskService taskService;

    @RequestMapping(value = "/task", method = RequestMethod.GET)
    public ResponseEntity<List<Task>> getAllTask() {
        return taskService.getAll()
                .map(ResponseEntity::ok)
                .orElseGet(ResponseEntity.notFound()::build);
    }
}
