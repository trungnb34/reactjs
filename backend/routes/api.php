<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('get-all-category', 'HomeController@getAllCategory');

Route::get('get-all-post-by-cate/{slug}', 'PostController@getAllPostByCate');

Route::get('get-detail-post/{slug}', 'PostController@getDetailPost');

Route::get('get-all-tag', 'TagController@getAllTag');

Route::get('get-list-post-by-date', 'PostController@getListPostByDate');