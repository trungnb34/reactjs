<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = "posts";

    protected $fillable = [
        'user_id', 'slug', 'title', 'content', 'abstract', 'avatar', 'isOpenComment', 'status'
    ];
    public function categorys() {
        return $this->belongsToMany('App\Models\Category', 'category_posts', 'post_id', 'category_id');
    }
    public function tag() {
        return $this->belongsToMany('App\Models\Category', 'tag_posts', 'post_id', 'tag_id');
    }
}
