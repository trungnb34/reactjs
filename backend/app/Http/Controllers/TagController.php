<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TagController extends Controller
{
    public function getAllTag() {
        $tags = DB::table('tags')->where('status', 1)->get();
        return response()->json(['tags' => $tags]);
    }
}
