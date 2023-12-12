package com.example.asmmob403.model;

public class PostComments {
    private String comicId;
    private String userId;
    private String content;
    private String commenttime;

    public PostComments() {
    }

    public PostComments(String comicId, String userId, String content, String commenttime) {
        this.comicId = comicId;
        this.userId = userId;
        this.content = content;
        this.commenttime = commenttime;
    }

    public String getComicId() {
        return comicId;
    }

    public void setComicId(String comicId) {
        this.comicId = comicId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
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
