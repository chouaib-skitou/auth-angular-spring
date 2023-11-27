package com.auth.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class MessagesController {

    @GetMapping("/messages")
    public ResponseEntity<List<String>> getMessage() {
        return ResponseEntity.ok(Arrays.asList("Message 1", "Message 2", "Message 3"));
    }
}
