<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('admin.layout.layout');
});

Route::get('/post', function () {
    return view('admin.posts.posts');
});
Route::get('/list-post', function () {
    return view('admin.list-post.list-post');
});

Route::get('/profile', function () {
    return view('admin.profiles.profiles');
});