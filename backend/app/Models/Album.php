<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $table = 'albums';

    protected $fillable = [
        'name', 'user_id', 'description'
    ];

    public function images() {
        return $this->hasMany('App\Models\Images', 'album_id', 'id');
    }
}
