<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = "tags";
    protected $fillable = [
        'name', 'slug', 'status'
    ];

    public function post() {
        return $this->belongsToMany('App\Models\Category', 'tag_posts', 'tag_id', 'post_id');
    }
}
