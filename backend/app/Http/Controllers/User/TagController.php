<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class TagController extends Controller
{
    public function getAllTag() {
        $tags = DB::table('tags')->where('status', 1)->get();
        return response()->json(['tags' => $tags]);
    }
}
