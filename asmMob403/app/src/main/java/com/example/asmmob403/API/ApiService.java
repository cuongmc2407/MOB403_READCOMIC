package com.example.asmmob403.API;

import com.example.asmmob403.model.Book;
import com.example.asmmob403.model.Comments;
import com.example.asmmob403.model.PostComments;
import com.example.asmmob403.model.User;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface ApiService {

    @GET("login/{username}/{password}")
    Call<User> getUserLogin(@Path("username") String username, @Path("password") String password);

//    @POST("Api/user/register")
//    Call<User> registerUser(@Body User user);

    @POST("user/register")
    Call<User> registerUser(@Body User user);

    @GET("comic/getAllComics")
    Call<List<Book>> getListBooks();

    @GET("comic/filterComic")
    Call<List<Book>> getListBooksFilter(@Query("name") String name);

    @GET("comic/getAllComics")
    Call<Book> getDetailBook(@Query("_id") String _id);

    @GET("comic/getAllComics")
    Call<Book> getListImage(@Query("_id") String _id, @Query("read") String read);

    @GET("comic/comments")
    Call<List<Comments>> getListComments(@Query("_id") String _id);

    @POST("comic/postComments")
    Call<PostComments> sendComment(@Body PostComments postComments);
}
