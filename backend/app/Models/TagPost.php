<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TagPost extends Model
{
    protected $table = "tag_posts";

    protected $fillable = [
        "tag_id", "post_id"
    ];
}
