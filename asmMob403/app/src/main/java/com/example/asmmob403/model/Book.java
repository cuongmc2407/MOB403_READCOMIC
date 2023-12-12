package com.example.asmmob403.model;

import java.util.List;

public class Book {
    private String _id;
    private String name;
    private String description;
    private String author;
    private int publicationYear;
    private String coverImage;
    private List<String> images;

    public Book() {
    }

    public Book(String name, String description, String author, int publicationYear, String coverImage) {
        this.name = name;
        this.description = description;
        this.author = author;
        this.publicationYear = publicationYear;
        this.coverImage = coverImage;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getPublicationYear() {
        return publicationYear;
    }

    public void setPublicationYear(int publicationYear) {
        this.publicationYear = publicationYear;
    }

    public String getCoverImage() {
        return coverImage;
    }

    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }
}
