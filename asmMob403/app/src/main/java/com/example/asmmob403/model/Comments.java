package com.example.asmmob403.model;

public class Comments {
    private User userId;
    private String content;
    private String commenttime;

    public Comments() {
    }

    public Comments(User userId, String content, String commenttime) {
        this.userId = userId;
        this.content = content;
        this.commenttime = commenttime;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCommenttime() {
        return commenttime;
    }

    public void setCommenttime(String commenttime) {
        this.commenttime = commenttime;
    }
}
