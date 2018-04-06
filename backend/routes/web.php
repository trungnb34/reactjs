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
//    return view('admin.layout.layout');
    return redirect()->route('list-post', 1);
})->name('home');

Route::get('/profile', function () {
    return view('admin.profiles.profiles');
});

Route::get('/login', 'Auth\LoginController@getLogin')->name('login');

Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

Route::post('/login', 'Auth\LoginController@login');

Route::get('/register', 'Auth\RegisterController@getRegister')->name('register');

Route::post('/register', 'Auth\RegisterController@register');

Route::middleware(['admin'])->group(function () {
    Route::get('/list-post/{stt}', 'Admin\ListPostController@getListPost')->name('list-post');
});