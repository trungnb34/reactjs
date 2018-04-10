<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = "categorys";

    protected $fillable = [
        'name', 'status', 'avatar', 'parent_id'
    ];

    public function post() {
        return $this->belongsToMany('App\Models\Post', 'category_posts', 'post_id', 'category_id');
    }
}
