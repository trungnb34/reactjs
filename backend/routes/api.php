<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('get-all-category', 'User\HomeController@getAllCategory');

Route::get('get-all-post-by-cate/{slug}', 'User\PostController@getAllPostByCate');

Route::get('get-detail-post/{slug}', 'User\PostController@getDetailPost');

Route::get('get-all-tag', 'User\TagController@getAllTag');

Route::get('get-list-post-by-date', 'User\PostController@getListPostByDate');

Route::get('get-relate-post/{id}', 'User\PostController@getRelatePost');

Route::get('get-all-post-by-tag/{slug}', 'User\PostController@getPostByTag');

Route::post('api-register', 'Auth\RegisterController@apiRegister');

Route::post('api-login', 'Auth\LoginController@apiLogin');

Route::get('get-user-infor', 'Auth\LoginController@getUserInfo');

Route::get('add-favorite/{id}', 'User\PostController@AddFavorite');
