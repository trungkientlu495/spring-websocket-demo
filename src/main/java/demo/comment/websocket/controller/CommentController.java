package demo.comment.websocket.controller;

import demo.comment.websocket.entity.Comment;
import demo.comment.websocket.repository.CommentRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequiredArgsConstructor
@Slf4j
public class CommentController {
    public final CommentRepo commentRepo;
    @MessageMapping("/comment.create")
    @SendTo("/topic/public")
    public String postComment(@Payload String comment) {
//        Comment newComment = new Comment();
//        newComment.setComment(comment.getComment());
//        newComment.setCreatedAt(new Date());
//        commentRepo.save(newComment);
//        log.info("New comment created");
        return comment;
    }

    @MessageMapping("/comment.add")
    @SendTo("/topic/public")
    public String addGroup(@Payload String comment) {

        log.info("MNPQ");
        return comment;
    }

}
